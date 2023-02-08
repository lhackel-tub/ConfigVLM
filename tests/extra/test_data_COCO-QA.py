from typing import Sequence
from typing import Union

import pytest
import torch

from configvlm.extra.COCOQA_DataModule import COCOQADataModule
from configvlm.extra.COCOQA_DataModule import COCOQADataSet
from configvlm.extra.COCOQA_DataModule import resolve_cocoqa_data_dir


@pytest.fixture
def data_dir():
    return resolve_cocoqa_data_dir(None, allow_mock=True)


def dataset_ok(
    dataset: Union[COCOQADataSet, None],
    expected_image_shape: Sequence,
    expected_question_length: int,
    expected_length: Union[int, None],
    classes: int,
):
    assert dataset is not None
    if expected_length is not None:
        assert len(dataset) == expected_length

    if len(dataset) > 0:
        for i in [0, 100, 2000, 5000, 10000]:
            i = i % len(dataset)
            sample = dataset[i]
            assert len(sample) == 3
            v, q, a = sample
            assert v.shape == expected_image_shape
            assert len(q) == expected_question_length
            assert list(a.size()) == [classes]


def dataloaders_ok(
    dm: COCOQADataModule,
    expected_image_shape: Sequence,
    expected_question_length: int,
    classes: int,
):
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
            v, _q, a = batch
            q = torch.stack(_q).T
            assert v.shape == expected_image_shape
            assert q.shape == (
                expected_image_shape[0],
                expected_question_length,
            )
            assert a.shape == (expected_image_shape[0], classes)


@pytest.mark.parametrize("split", ["train", "test"])
def test_ds_default(data_dir, split):
    img_size = (3, 120, 120)
    ds = COCOQADataSet(data_dir, split=split)

    dataset_ok(
        dataset=ds,
        expected_image_shape=img_size,
        expected_question_length=64,
        expected_length=None,
        classes=430,
    )


dataset_params = ["train", "val", "test", None]


@pytest.mark.parametrize("split", dataset_params)
def test_dm_default(data_dir, split: str):
    dm = COCOQADataModule(data_dir=data_dir)
    split2stage = {"train": "fit", "val": "fit", "test": "test", None: None}
    dm.setup(stage=split2stage[split])
    dm.prepare_data()
    if split in ["train", "val"]:
        dataset_ok(
            dm.train_ds,
            expected_image_shape=(3, 120, 120),
            expected_length=None,
            classes=430,
            expected_question_length=64,
        )
        dataset_ok(
            dm.val_ds,
            expected_image_shape=(3, 120, 120),
            expected_length=None,
            classes=430,
            expected_question_length=64,
        )
        assert dm.test_ds is None
    if split == "test":
        dataset_ok(
            dm.test_ds,
            expected_image_shape=(3, 120, 120),
            expected_length=None,
            classes=430,
            expected_question_length=64,
        )
        assert dm.train_ds is None
        assert dm.val_ds is None
    # TODO add test for None


@pytest.mark.parametrize(
    "split, bs", [(s, b) for s in dataset_params for b in [1, 2, 3, 4, 16, 32]]
)
def test_dm_default_dataloader(data_dir, split: str, bs: int):
    dm = COCOQADataModule(data_dir=data_dir, batch_size=bs)
    dataloaders_ok(
        dm,
        expected_image_shape=(bs, 3, 120, 120),
        expected_question_length=64,
        classes=430,
    )


def test_dm_dataloaders(data_dir):
    pass


def test_dm_shuffle_false(data_dir):
    pass


def test_dm_shuffle_none(data_dir):
    pass


def test_dm_shuffle_true(data_dir):
    pass
