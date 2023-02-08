import warnings

import pytest

with warnings.catch_warnings():
    warnings.filterwarnings(
        action="ignore", category=DeprecationWarning, message=".*distutils.*"
    )
    from configvlm.extra.BEN_DataModule_LMDB_Encoder import (
        BENDataSet,
        BENDataModule,
    )

from configvlm.extra.BEN_lmdb_utils import resolve_ben_data_dir
from typing import Sequence, Union
import torch


@pytest.fixture
def data_dir():
    return resolve_ben_data_dir(None, allow_mock=True)


dataset_params = ["train", "val", "test", None]

img_sizes = [60, 120, 128, 144, 256]
channels_pass = [2, 3, 4, 10, 12]  # accepted channel configs
channels_fail = [5, 1, 0, -1, 13]  # not accepted configs
img_shapes_pass = [(c, hw, hw) for c in channels_pass for hw in img_sizes]
img_shapes_fail = [(c, hw, hw) for c in channels_fail for hw in img_sizes]
max_img_idxs = [0, 1, 10, 20]
max_img_idxs_too_large = [600_000, 1_000_000]


def dataset_ok(
    dataset: Union[BENDataSet, None],
    expected_image_shape: Sequence,
    expected_length: Union[int, None],
):
    # In principal dataset may be not set in data modules, but mypy requires this
    # notation to be happy.
    # Check that this is not the case here
    assert dataset is not None
    if expected_length is not None:
        assert len(dataset) == expected_length

    if len(dataset) > 0:
        for i in [0, 100, 2000, 5000, 10000]:
            i = i % len(dataset)
            sample = dataset[i]
            assert len(sample) == 2
            v, lbl = sample
            assert v.shape == expected_image_shape
            assert list(lbl.size()) == [19]


def dataloaders_ok(dm: BENDataModule, expected_image_shape: Sequence):
    dm.setup(stage=None)
    dataloaders = [
        dm.train_dataloader(),
        dm.val_dataloader(),
        dm.test_dataloader(),
    ]
    for dl in dataloaders:
        max_batch = len(dl) // expected_image_shape[0]
        for i, batch in enumerate(dl):
            if i == 5 or i >= max_batch:
                break
            v, lbl = batch
            assert v.shape == expected_image_shape
            assert lbl.shape == (expected_image_shape[0], 19)


@pytest.mark.parametrize("split", dataset_params)
def test_4c_ben_dataset_splits(data_dir, split: str):
    img_size = (4, 120, 120)
    ds = BENDataSet(root_dir=data_dir, split=split, img_size=img_size)

    dataset_ok(dataset=ds, expected_image_shape=img_size, expected_length=None)


@pytest.mark.parametrize("img_size", img_shapes_pass)
def test_ben_val_dataset_sizes(data_dir, img_size: Sequence):
    ds = BENDataSet(root_dir=data_dir, split="val", img_size=img_size)

    dataset_ok(dataset=ds, expected_image_shape=img_size, expected_length=None)


@pytest.mark.parametrize("img_size", img_shapes_pass)
def test_ben_val_dataset_sizes_rescale(data_dir, img_size: Sequence):
    new_size = (img_size[0], 100, 100)
    from torchvision import transforms

    transform = transforms.Compose(
        [
            transforms.Resize(new_size[1:]),
        ]
    )
    ds = BENDataSet(
        root_dir=data_dir, split="val", img_size=img_size, transform=transform
    )

    dataset_ok(dataset=ds, expected_length=None, expected_image_shape=new_size)


@pytest.mark.parametrize("img_size", img_shapes_fail)
def test_ben_val_dataset_sizes_fail(data_dir, img_size: int):
    with pytest.raises(AssertionError):
        _ = BENDataSet(root_dir=data_dir, split="val", img_size=img_size)


def test_ben_fail_image_retrieve(data_dir):
    ds = BENDataSet(root_dir=data_dir, split="val", img_size=(3, 120, 120))
    assert ds[0][0].shape == (3, 120, 120)
    # overwrite this lookup
    # would have been a subscribable lookup
    ds.BENLoader = {ds.patches[0]: (None, None)}
    with pytest.raises(ValueError):
        _ = ds[0]


@pytest.mark.parametrize("max_img_idx", max_img_idxs)
def test_ben_max_index(data_dir, max_img_idx: int):
    ds = BENDataSet(
        root_dir=data_dir,
        split="val",
        img_size=(3, 120, 120),
        max_img_idx=max_img_idx,
    )

    dataset_ok(
        dataset=ds,
        expected_image_shape=(3, 120, 120),
        expected_length=max_img_idx,
    )


@pytest.mark.parametrize("max_img_idx", max_img_idxs_too_large)
def test_ben_max_index_too_large(data_dir, max_img_idx: int):
    ds = BENDataSet(
        root_dir=data_dir,
        split="val",
        img_size=(3, 120, 120),
        max_img_idx=max_img_idx,
    )
    assert len(ds) < max_img_idx


@pytest.mark.parametrize("split", dataset_params)
def test_ben_dm_default(data_dir, split: str):
    dm = BENDataModule(data_dir=data_dir)
    split2stage = {"train": "fit", "val": "fit", "test": "test", None: None}
    dm.setup(stage=split2stage[split])
    dm.prepare_data()
    if split in ["train", "val"]:
        dataset_ok(
            dm.train_ds,
            expected_image_shape=(12, 120, 120),
            expected_length=None,
        )
        dataset_ok(dm.val_ds, expected_image_shape=(12, 120, 120), expected_length=None)
        assert dm.test_ds is None
    if split == "test":
        dataset_ok(
            dm.test_ds,
            expected_image_shape=(12, 120, 120),
            expected_length=None,
        )
        assert dm.train_ds is None
        assert dm.val_ds is None
    # TODO add test for None


@pytest.mark.parametrize("img_size", [[1], [1, 2], [1, 2, 3, 4]])
def test_ben_dm_wrong_imagesize(data_dir, img_size):
    with pytest.raises(ValueError):
        _ = BENDataModule(data_dir, img_size=img_size)


@pytest.mark.parametrize("bs", [1, 2, 4, 8, 16, 32, 13, 27])
def test_ben_dm_dataloaders(data_dir, bs):
    dm = BENDataModule(data_dir=data_dir, batch_size=bs)
    dataloaders_ok(dm, expected_image_shape=(bs, 12, 120, 120))


def test_ben_shuffle_false(data_dir):
    dm = BENDataModule(data_dir=data_dir, shuffle=False)
    dm.setup(None)
    # should not be equal due to transforms being random!
    assert not torch.equal(
        next(iter(dm.train_dataloader()))[0],
        next(iter(dm.train_dataloader()))[0],
    )
    assert torch.equal(
        next(iter(dm.val_dataloader()))[0], next(iter(dm.val_dataloader()))[0]
    )
    assert torch.equal(
        next(iter(dm.test_dataloader()))[0], next(iter(dm.test_dataloader()))[0]
    )


def test_ben_shuffle_none(data_dir):
    dm = BENDataModule(data_dir=data_dir, shuffle=None)
    dm.setup(None)
    assert not torch.equal(
        next(iter(dm.train_dataloader()))[0],
        next(iter(dm.train_dataloader()))[0],
    )
    assert torch.equal(
        next(iter(dm.val_dataloader()))[0], next(iter(dm.val_dataloader()))[0]
    )
    assert torch.equal(
        next(iter(dm.test_dataloader()))[0], next(iter(dm.test_dataloader()))[0]
    )


def test_ben_shuffle_true(data_dir):
    dm = BENDataModule(data_dir=data_dir, shuffle=True)
    dm.setup(None)
    assert not torch.equal(
        next(iter(dm.train_dataloader()))[0],
        next(iter(dm.train_dataloader()))[0],
    )
    assert not torch.equal(
        next(iter(dm.val_dataloader()))[0], next(iter(dm.val_dataloader()))[0]
    )
    assert not torch.equal(
        next(iter(dm.test_dataloader()))[0], next(iter(dm.test_dataloader()))[0]
    )
