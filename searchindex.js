Search.setIndex({"docnames": ["extra/BEN_LMDB_Reader", "extra/DataSets and DataModules", "extra/DataSets and DataModules/bigearthnet", "extra/DataSets and DataModules/cocoqa", "extra/DataSets and DataModules/hrvqa", "extra/DataSets and DataModules/rsvqa-hr", "extra/DataSets and DataModules/rsvqa-lr", "extra/DataSets and DataModules/rsvqaxben", "general/code_of_conduct", "general/contributing", "general/dependencies", "general/license", "ilmconfiguration", "image_captioning", "index", "installation", "references", "sup_pretraining", "vqa", "wip"], "filenames": ["extra/BEN_LMDB_Reader.ipynb", "extra/DataSets and DataModules.md", "extra/DataSets and DataModules/bigearthnet.ipynb", "extra/DataSets and DataModules/cocoqa.ipynb", "extra/DataSets and DataModules/hrvqa.ipynb", "extra/DataSets and DataModules/rsvqa-hr.ipynb", "extra/DataSets and DataModules/rsvqa-lr.ipynb", "extra/DataSets and DataModules/rsvqaxben.ipynb", "general/code_of_conduct.md", "general/contributing.md", "general/dependencies.md", "general/license.md", "ilmconfiguration.ipynb", "image_captioning.ipynb", "index.md", "installation.ipynb", "references.md", "sup_pretraining.ipynb", "vqa.ipynb", "wip.md"], "titles": ["Using the BigEarthNet LMDB Reader", "DataSets and DataModules", "BigEarthNet", "COCO-QA", "HRVQA", "RSVQA high resolution", "RSVQA low resolution", "RSVQAxBEN", "Contributor Covenant Code of Conduct", "Contributing", "Dependencies", "License", "Model Configuration", "[WIP] Image Captioning", "ConfigILM", "Installation", "Further references", "Supervised Image Classification", "Visual Question Answering (VQA)", "&lt;no title&gt;"], "terms": {"In": [0, 2, 3, 4, 5, 6, 7, 9, 16], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14, 15, 17, 18], "section": [0, 1, 15, 17, 18], "an": [0, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19], "exampl": [0, 4, 5, 6, 7, 8, 12, 14, 15, 17, 18], "i": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19], "shown": [0, 4, 5, 6, 7, 18], "convert": [0, 7], "lightn": [0, 2, 4, 5, 6, 7, 10, 14], "memori": [0, 2, 4, 5, 6, 7], "map": 0, "databas": 0, "manag": [0, 9, 17, 18], "background": 0, "index": [0, 2, 3, 4, 5, 6, 7], "python": [0, 9, 14, 17, 18], "object": [0, 2, 4, 5, 6, 7, 12], "due": 0, "its": [0, 2, 3, 4, 5, 6, 7, 9], "which": [0, 2, 4, 5, 6, 7, 8, 12, 14, 15, 18], "pickl": 0, "abl": [0, 4, 5, 6, 7], "thread": 0, "safe": 0, "after": [0, 2, 4, 5, 6, 7, 9, 17, 18], "first": [0, 2, 3, 4, 5, 6, 7, 16, 17, 18], "access": [0, 2, 4, 5, 6, 7, 16], "howev": [0, 2, 3, 4, 5, 6, 7], "onli": [0, 2, 3, 4, 5, 6, 7, 17, 18], "fork": 0, "support": [0, 2, 5, 6, 7, 12, 14], "e": [0, 8, 15, 17, 18], "g": [0, 15, 17, 18], "__getitem__": 0, "method": 0, "pytorch": [0, 2, 4, 5, 6, 7, 10, 14], "dataset": [0, 2, 4, 5, 6, 7, 15, 16], "To": [0, 2, 4, 5, 6, 7, 9, 17, 18], "we": [0, 1, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18], "have": [0, 2, 4, 5, 6, 7, 8, 9, 17, 18], "creat": [0, 9, 12, 14], "benlmdbread": [0, 2, 4, 7], "need": [0, 2, 3, 4, 5, 6, 7, 9, 17, 18], "4": [0, 2, 3, 4, 5, 6, 7, 10, 14, 16, 17, 18], "argument": 0, "creation": [0, 4, 5, 6, 7, 14, 17, 18], "name": [0, 2, 4, 5, 7, 12, 16], "directori": [0, 5, 6, 9], "where": [0, 14, 18], "lmbd": 0, "file": [0, 2, 4, 5, 6, 7, 11], "locat": 0, "string": 0, "sequenc": [0, 4, 5, 6, 7, 12], "3": [0, 2, 3, 4, 5, 6, 7, 10, 12, 14, 16, 17, 18], "int": [0, 12, 18], "desir": 0, "imag": [0, 3, 12, 14, 15, 16, 18], "size": [0, 2, 3, 4, 5, 6, 7, 8, 12, 18], "channel": [0, 2, 3, 5, 6, 7, 8, 12, 17, 18], "height": 0, "width": [0, 3], "indic": 0, "ar": [0, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 15, 16, 17, 18], "from": [0, 2, 3, 4, 5, 6, 7, 8, 11, 12, 14, 15, 16, 17, 18], "configilm": [0, 1, 2, 3, 4, 5, 6, 7, 9, 12, 13, 15, 17, 18, 19], "extra": [0, 2, 3, 4, 5, 6, 7, 10, 15, 17, 18], "ben_lmdb_util": 0, "import": [0, 2, 3, 4, 5, 6, 7, 12, 17, 18], "ben_read": 0, "lmdb_dir": 0, "my_data_path": [0, 2, 3, 4, 5, 6, 7, 17, 18], "path": [0, 2, 3, 4, 5, 6, 7, 17, 18], "image_s": [0, 2, 4, 5, 6, 7, 12, 17, 18], "120": [0, 2, 3, 5, 6, 7, 12, 14, 17, 18], "rgb": [0, 2, 5, 6, 7, 17, 18], "label_typ": 0, "old": 0, "img": [0, 2, 3, 4, 5, 6, 7], "lbl": [0, 2], "s2b_msil2a_20180502t093039_82_40": 0, "expect": [0, 2, 3, 5, 6, 7, 17, 18], "contain": [0, 2, 4, 5, 6, 7, 18], "3x120x120": 0, "annot": 0, "43": [0, 2, 5, 16], "version": [0, 1, 2, 5, 6, 8, 10, 14], "deliv": 0, "torch": [0, 2, 3, 4, 5, 6, 7, 10, 12, 17, 18], "tensor": [0, 2, 3, 4, 5, 6, 7, 12, 18], "list": [0, 9, 18], "complex": 0, "cultiv": 0, "pattern": [0, 8], "land": [0, 2], "princip": 0, "occupi": 0, "agricultur": [0, 7, 18], "signific": 0, "area": [0, 6, 7, 9, 14, 18], "natur": [0, 3, 4, 5, 6, 7, 8], "veget": 0, "broad": 0, "leav": 0, "forest": [0, 7, 18], "transit": [0, 7], "woodland": [0, 7], "shrub": [0, 7], "water": 0, "bodi": [0, 8], "If": [0, 3, 4, 5, 6, 7, 9, 14, 15], "now": [0, 10, 13, 17, 18, 19], "interest": 0, "can": [0, 2, 3, 4, 5, 6, 7, 9, 12, 14, 15, 17, 18], "specif": [0, 2], "return": [0, 2, 17, 18], "b8": 0, "b4": 0, "The": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 19], "defin": [0, 4, 5, 6, 7, 17, 18], "begin": 0, "align": [0, 8], "vi": 0, "frac": [0, 2, 4, 5, 6, 7], "b08": 0, "b04": 0, "end": [0, 2, 4, 5, 6, 7, 15, 17, 18], "2": [0, 2, 4, 5, 6, 7, 10, 12, 16, 17, 18], "veg_idx": 0, "0": [0, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 17, 18], "1": [0, 2, 3, 4, 5, 6, 7, 10, 15, 16, 17, 18], "08": [0, 2, 5], "dimens": [0, 4, 5, 6, 7], "04": 0, "like": [0, 2, 5, 6, 7, 8, 9, 12], "order": [0, 2, 4, 5, 6, 7], "specifi": [0, 2, 5, 6, 7, 8, 12], "paramet": [0, 2, 3, 4, 5, 6, 7, 12, 17, 18], "note": [0, 2, 4, 5, 6, 7], "also": [0, 2, 4, 5, 6, 7, 8, 12], "ha": [0, 2, 4, 5, 6, 7, 10, 15], "set": [0, 3, 8, 9, 15, 16, 17, 18], "check": [0, 9, 15], "interpol": 0, "alreadi": [0, 18], "appli": [0, 8], "loader": 0, "nn": [0, 17, 18], "function": [0, 2, 4, 5, 6, 7, 15, 17, 18], "corner": 0, "bicub": 0, "mode": 0, "For": [0, 2, 4, 5, 6, 7, 8, 12, 15, 17, 18], "eas": [0, 14], "some": [0, 4, 5, 6, 7, 9, 15, 17, 18], "predefin": [0, 15], "configur": [0, 2, 3, 4, 5, 6, 7, 15], "avail": [0, 2, 8], "without": [0, 4, 5, 6, 7, 8, 11], "all": [0, 2, 4, 5, 6, 7, 8, 9, 11, 12, 15, 16, 17, 18], "pre": [0, 2, 10, 14, 15, 17, 18], "definit": 0, "respect": [0, 2, 8, 12, 17, 18], "s1": [0, 16], "vh": 0, "vv": 0, "s2": [0, 2, 4, 5, 7, 16], "b02": 0, "b03": 0, "b05": 0, "b06": 0, "b07": 0, "b11": 0, "b12": 0, "b8a": 0, "10m20m": 0, "ir": 0, "10": [0, 2, 4, 5, 6, 7, 10, 12, 14, 16, 18], "12": [0, 2, 7, 10, 16, 17, 18], "request": [0, 4, 5, 6, 8, 9, 14], "new": [0, 16, 17, 18], "19": [0, 2, 4, 7, 16, 17], "introduc": [0, 16], "sumbul": [0, 2, 16], "et": [0, 2, 3, 4, 5, 6, 7, 16, 18], "al": [0, 2, 3, 4, 5, 6, 7, 16, 18], "6": [0, 2, 4, 10, 16], "here": [0, 2, 4, 5, 6, 7, 16, 17, 18], "see": [0, 2, 3, 4, 5, 6, 7, 8], "get": [0, 9, 15, 18], "inland": 0, "pprint": [0, 12], "wish": 0, "dimension": 0, "one": [0, 2, 3, 4, 5, 6, 7, 18], "hot": [0, 2, 4, 5, 6, 7], "guarante": 0, "uniform": 0, "convers": 0, "so": [0, 11, 17, 18], "each": [0, 2, 4, 5, 6, 7], "vector": [0, 2, 4, 5, 6, 7], "alwai": [0, 4, 5, 6, 7, 12, 18], "same": [0, 2, 4, 5, 6, 7, 18], "regardless": [0, 8], "user": [0, 14, 18], "ben19_list_to_onehot": 0, "collect": [0, 12, 14, 16, 17, 18], "dure": [0, 4, 5, 6, 7, 8, 17, 18], "initi": [0, 2, 18], "base": [0, 2, 3, 4, 5, 6, 7], "chosen": 0, "ben_reader_1": 0, "print": [0, 2, 4, 5, 6, 7], "f": [0, 4, 5, 6, 7, 17, 18], "std": 0, "ben_reader_2": 0, "b01": 0, "2218": 0, "94553375": 0, "590": 0, "23569706": 0, "1365": 0, "45589904": 0, "675": 0, "88746967": 0, "340": 0, "76769064": 0, "2266": 0, "46036911": 0, "554": 0, "81258967": 0, "1356": 0, "13789355": 0, "current": [1, 5, 6, 7, 12, 15], "includ": [1, 4, 5, 6, 7, 8, 11, 14, 16], "recommend": [1, 2, 4, 5, 6, 7, 15, 16], "setup": [1, 2, 4, 5, 6, 7], "mai": [1, 3, 4, 5, 6, 7, 8, 9, 18], "remov": [1, 8, 17, 18], "futur": 1, "extend": [1, 7], "depend": [1, 2, 4, 5, 6, 7, 9, 12, 15, 17, 18], "feedback": [1, 8], "bigearthnet": [1, 5, 6, 7, 10, 17], "rsvqaxben": [1, 4, 18], "rsvqa": [1, 16], "low": 1, "resolut": [1, 4, 16], "high": [1, 3, 4, 16], "hrvqa": [1, 16], "page": [2, 3, 4, 5, 6, 7, 9, 14, 15], "describ": [2, 3, 4, 5, 6, 7, 17, 18], "usag": [2, 3, 4, 5, 6, 7, 17, 18], "datamodul": [2, 3, 4, 5, 6, 7, 14, 17, 18], "multi": [2, 16], "spectral": 2, "multilabel": [2, 16], "remot": [2, 14, 16], "sens": [2, 14, 16], "us": [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14, 15, 17, 18], "cover": [2, 4, 5, 6, 7, 15], "classif": [2, 12, 16], "offici": [2, 4, 5, 6, 8], "paper": [2, 16], "wa": [2, 3, 4, 5, 6, 7, 8, 18], "publish": [2, 3, 4, 5, 6, 7, 8, 11, 14, 18], "5": [2, 3, 4, 7, 10, 16], "updat": 2, "modal": [2, 16, 18], "detail": [2, 4, 14], "inform": [2, 4, 8, 12, 16], "itself": [2, 4, 5, 6, 7], "pleas": [2, 14], "refer": 2, "public": [2, 8, 16], "guid": 2, "divid": [2, 4, 17, 18], "two": [2, 4, 5, 6, 7, 14, 15], "modul": [2, 4, 5, 6, 7], "class": [2, 8, 12, 16, 17, 18], "standard": [2, 4, 5, 6, 7], "util": [2, 4, 5, 6, 7], "data": [2, 3, 4, 5, 6, 7, 16, 17, 18], "pytorch_lightn": [2, 4, 5, 6, 7, 17, 18], "lightningdatamodul": [2, 4, 5, 6, 7], "encapsul": [2, 4, 5, 6, 7, 17, 18], "easi": [2, 4, 5, 6, 7, 14, 18], "applic": [2, 4, 5, 6, 7, 14], "read": [2, 4, 5, 6, 7, 16], "label": [2, 17, 18], "lmdb": [2, 4, 7, 10], "most": [2, 3, 4, 5, 6, 7, 14, 18], "basic": [2, 3, 4, 5, 6, 7, 17], "form": [2, 3, 4, 5, 6, 7, 18], "csv": [2, 4, 5, 7], "assum": [2, 7, 15], "bigearthnetencod": [2, 7], "o": [2, 4, 5, 6, 7], "point": [2, 7], "view": [2, 7], "folder": [2, 3, 5, 6, 7], "10m": [2, 7], "20m": [2, 7], "sentinel": [2, 5, 6, 7, 16], "full": [2, 3, 5, 6, 7, 18], "structur": [2, 3, 4, 5, 6, 7], "mdb": [2, 7], "lock": [2, 7, 10], "test": [2, 3, 4, 6, 7, 9, 14, 17, 18], "train": [2, 3, 4, 5, 6, 7, 15, 16, 17, 18], "val": [2, 4, 5, 6, 7, 17, 18], "ben_dataset": 2, "ben_datamodul": [2, 17], "d": [2, 3, 4, 5, 6, 7], "root_dir": [2, 3, 4, 5, 6, 7], "56": 2, "flip": [2, 4, 5, 6, 7], "choos": [2, 5, 6, 7], "bgr": [2, 5, 6, 7], "axi": [2, 5, 6, 7], "displai": [2, 5, 6, 7, 17, 18], "bring": [2, 5, 6, 7], "home": [2, 18], "runner": [2, 18], "work": [2, 14, 17, 18], "venv": 2, "lib": 2, "python3": 2, "site": [2, 14], "packag": [2, 4, 5, 6, 7, 14, 17, 18], "tqdm": 2, "auto": [2, 17, 18], "py": [2, 18], "21": 2, "tqdmwarn": 2, "iprogress": 2, "found": [2, 4, 5, 6, 7], "jupyt": 2, "ipywidget": 2, "http": [2, 8, 9, 14, 16], "readthedoc": 2, "io": 2, "en": 2, "stabl": 2, "user_instal": 2, "html": [2, 8], "autonotebook": 2, "notebook_tqdm": 2, "ben": 2, "none": [2, 3, 4, 5, 6, 7, 12, 15, 17, 18], "75": [2, 7], "patch": [2, 16], "filter": 2, "differ": [2, 4, 6, 7, 8, 17, 18], "via": [2, 4, 5, 6, 7, 8, 14, 15], "limit": [2, 3, 4, 5, 6, 7, 11], "combin": [2, 4, 5, 6, 7, 12, 14, 15, 18], "call": [2, 4, 5, 6, 7, 17, 18], "ben_datamodule_lmdb_encod": 2, "get_available_channel_configur": 2, "altern": [2, 15], "faulti": [2, 5, 6, 7], "possibl": [2, 4, 5, 6, 7, 9, 12, 14], "well": [2, 4, 8, 12, 17, 18], "whilst": 2, "rais": 2, "assertionerror": [2, 5, 6, 7], "lmdbreader": 2, "It": [2, 3, 4, 5, 6, 7, 13, 19], "By": [2, 4, 5, 6, 7], "default": [2, 3, 4, 5, 6, 7, 12], "three": [2, 5, 6, 7], "_": [2, 3, 4, 5, 6, 7], "25": [2, 3, 4, 5, 6, 7, 12], "max_img_idx": [2, 3, 4, 5, 6, 7], "n": [2, 4, 5, 6, 7], "alphabet": [2, 4, 5, 6, 7], "A": [2, 4, 5, 6, 7, 8, 11, 12, 16], "larger": [2, 4, 5, 6, 7], "than": [2, 4, 5, 6, 7], "": [2, 4, 5, 6, 7, 8, 14, 15], "case": [2, 4, 5, 7, 15], "equal": [2, 4, 5, 6, 7], "behaviour": [2, 4, 5, 6, 7], "100": [2, 3, 4, 5, 6, 7, 14], "wrap": [2, 4, 5, 6, 7], "automat": [2, 4, 5, 6, 7, 9, 17, 18], "gener": [2, 3, 4, 5, 6, 7, 9, 17, 18], "per": [2, 4, 5, 6, 7], "augment": [2, 4, 5, 6, 7], "shuffl": [2, 4, 5, 6, 7], "etc": [2, 4, 5, 6, 7], "resiz": [2, 4, 5, 6, 7], "normal": [2, 4, 5, 6, 7, 17, 18], "addition": [2, 4, 5, 6, 7, 14, 18], "nois": [2, 4, 5, 6, 7], "rotat": [2, 4, 5, 6, 7], "overwritten": [2, 4, 5, 6, 7], "below": [2, 4, 5, 6, 7, 12], "popul": [2, 4, 5, 6, 7], "insid": [2, 4, 5, 6, 7, 17, 18], "stage": [2, 4, 5, 6, 7], "fit": [2, 4, 5, 6, 7, 11, 17, 18], "prepar": [2, 5, 6, 7], "valid": [2, 4, 5, 6, 7, 17, 18], "dm": [2, 4, 5, 6, 7, 17, 18], "data_dir": [2, 4, 5, 6, 7, 17, 18], "befor": [2, 4, 5, 6, 7], "train_d": [2, 4, 5, 6, 7], "val_d": [2, 4, 5, 6, 7], "test_d": [2, 4, 5, 6, 7], "worker": [2, 4, 5, 6, 7, 17, 18], "23": [2, 10], "took": [2, 5], "00": [2, 4, 5, 6, 7], "second": [2, 5], "total": [2, 4, 5, 6, 7], "sampl": [2, 4, 5], "0x7fa5efc2c700": 2, "0x7fa5ef9a1f30": 2, "afterward": [2, 4, 5, 6, 7], "easili": [2, 4, 5, 6, 7, 15], "len": [2, 4, 5, 6, 7], "dl": [2, 4, 5, 6, 7], "lceil": [2, 4, 5, 6, 7], "batch": [2, 4, 5, 6, 7, 17, 18], "_size": [2, 4, 5, 6, 7], "rceil": [2, 4, 5, 6, 7], "therefor": [2, 4, 5, 6, 7, 12, 18], "batch_siz": [2, 4, 5, 6, 7], "16": [2, 4, 5, 6, 7], "train_load": [2, 4, 5, 6, 7], "train_dataload": [2, 4, 5, 6, 7], "addit": [2, 4, 5, 6, 7, 14, 15, 18], "pass": [2, 4, 5, 6, 7, 9], "through": [2, 4, 5, 6, 7, 8, 14], "settabl": [2, 4, 5, 6, 7], "num_workers_dataload": [2, 4, 5, 6, 7, 17, 18], "cpu_count": [2, 4, 5, 6, 7], "valu": [2, 4, 5, 6, 7, 12, 18], "mean": [2, 4, 5, 6, 7, 15, 17, 18], "chang": [2, 4, 5, 6, 7, 9], "accompani": [2, 4, 5, 6, 7], "messag": [2, 4, 5, 6, 7], "hint": [2, 4, 5, 6, 7], "Not": [2, 12], "changeabl": 2, "pin": [2, 4, 5, 6, 7], "true": [2, 4, 5, 6, 7, 10, 12, 17, 18], "cuda": [2, 4, 5, 6, 7], "enabl": [2, 14], "devic": [2, 4, 5, 6, 7, 17, 18], "fals": [2, 4, 5, 6, 7, 12, 17, 18], "otherwis": [2, 4, 5, 6, 7, 8, 11], "7": [2, 5, 6, 7, 10], "96mhint": [2, 4, 5, 6, 7, 18], "0m": [2, 3, 4, 5, 6, 7, 18], "dataload": [3, 14, 17, 18], "vqa": [3, 4, 5, 6, 7, 15], "ren": [3, 16], "coco_train2014_": 3, "id": [3, 4, 5, 6, 7], "jpg": 3, "b": 3, "coco_val2014_": 3, "j": 3, "z": 3, "qa_qa_test": 3, "json": [3, 4, 5, 6, 7], "qa_qa_train": 3, "cocoqa_dataset": 3, "cocoqadataset": 3, "question": [3, 4, 5, 6, 7, 8, 16], "answer": [3, 8, 16], "93mwarn": [3, 4, 5, 6], "No": [3, 8], "token": [3, 18], "provid": [3, 4, 5, 6, 7, 8, 9, 11, 14, 16], "berttoken": 3, "uncas": 3, "result": [3, 4, 5, 6, 7, 17, 18], "veri": 3, "bad": [3, 4, 5, 6, 7], "perform": [3, 4, 5, 6, 7], "network": [3, 12, 17, 18], "other": [3, 4, 5, 6, 7, 8, 9, 11, 12, 16, 17, 18], "load": [3, 18], "50": [3, 4], "pair": [3, 7, 16], "reduc": [3, 7], "start": [3, 4, 5, 6, 7, 9, 15, 17, 18], "101": [3, 4, 5, 6, 7, 18], "2054": [3, 6], "2003": [3, 5, 6], "1996": [3, 5, 6], "3609": 3, "1997": [3, 5, 6], "3933": 3, "102": [3, 4, 5, 6, 7, 18], "As": [3, 4, 5, 6, 7], "out": [3, 4, 5, 6, 7, 11, 15], "languag": [3, 4, 5, 6, 7, 8, 12, 14, 15, 18], "text": [3, 4, 5, 6, 7, 18], "lead": [3, 4, 5, 6, 7, 8], "account": [3, 4, 5, 6, 7, 8], "input": [3, 4, 5, 6, 7, 17, 18], "_get_hf_model": [3, 4, 5, 6, 7], "prajjwal1": [3, 4, 5, 6, 7, 18], "bert": [3, 4, 5, 6, 7, 18], "tini": [3, 4, 5, 6, 7, 18], "split": 3, "transform": [3, 10], "number": [3, 17, 18], "img_siz": [3, 5, 6, 7, 17, 18], "should": [3, 4, 5, 6, 12, 14], "seq_length": [3, 4, 5, 6, 7], "200": 3, "32": [3, 12], "3157": 3, "2417": 3, "1012": 3, "aerial": [4, 16], "open": [4, 8, 9, 14], "dutch": 4, "government": 4, "organ": [4, 12], "li": [4, 16], "more": [4, 5, 6, 7, 9, 16], "websit": [4, 16], "small": [4, 5, 6, 7], "distribut": [4, 5, 6, 7, 11], "follow": [4, 5, 6, 8, 9, 11, 12, 14, 15], "when": [4, 5, 6, 7, 8], "download": [4, 9, 15, 16], "extract": [4, 16], "png": [4, 5], "53512": 4, "test_quest": 4, "train_answ": 4, "train_quest": 4, "val_answ": 4, "val_quest": 4, "hrvqa_dataset": 4, "1024": 4, "2129": [4, 5], "2502": 4, "2024": [4, 5, 7, 18], "12400": 4, "1999": 4, "2023": [4, 11, 14, 16], "3746": 4, "1029": [4, 5, 6, 7, 18], "usual": [4, 5, 6, 7, 17, 18], "model": [4, 5, 6, 7, 14, 15], "integ": [4, 5, 6, 7], "length": [4, 5, 6, 7], "shorter": [4, 5, 6, 7], "pad": [4, 5, 6, 7, 18], "zero": [4, 5, 6, 7], "longer": [4, 5, 6, 7], "truncat": [4, 5, 6, 7], "last": [4, 5, 6, 7], "non": [4, 5, 6, 7, 17, 18], "question1": [4, 5, 6, 7], "2116": [4, 5], "10806": 4, "3455": 4, "5434": 4, "3491": 4, "8": [4, 5, 6, 7, 10], "question2": [4, 5, 6, 7], "reconstruct": [4, 5, 6, 7], "special": [4, 5, 6, 7], "decod": [4, 5, 6, 7, 18], "cl": [4, 5, 6, 7, 18], "how": [4, 9, 12, 15], "mani": [4, 5, 6, 9, 12], "rectangular": 4, "basketbal": 4, "court": 4, "sep": [4, 5, 6, 7, 18], "skip_special_token": [4, 5, 6, 7], "demand": 4, "both": [4, 18], "becaus": [4, 17, 18], "doe": [4, 5, 6, 7], "option": [4, 10, 12, 17, 18], "subdivid": 4, "ad": [4, 5], "random": [4, 17, 18], "seed": [4, 17, 18], "ratio": 4, "div": 4, "div_se": 4, "split_siz": 4, "given": 4, "round": 4, "down": 4, "proport": 4, "fulli": [4, 17, 18], "leak": 4, "ds_v": 4, "42": [4, 17, 18], "66": 4, "ds_vd": 4, "qv": 4, "x": [4, 17, 18], "question_id": 4, "ds_td": 4, "qt": 4, "intersect": 4, "union": 4, "There": [4, 5, 6, 9, 15], "fewer": [4, 5, 6, 7], "1000": [4, 5, 6, 14, 18], "frequent": [4, 5, 6, 7], "about": [4, 5, 6, 7, 8, 9], "relev": [4, 5, 6, 7, 16], "certain": [4, 5, 6, 7], "output": [4, 5, 6, 7, 17, 18], "could": [4, 7, 8], "up": [4, 7, 9, 15, 17, 18], "million": [4, 7], "prevent": [4, 5, 6, 7, 12], "explos": [4, 5, 6, 7], "determin": [4, 5, 6, 7, 8], "highest": [4, 5, 6, 7], "reduct": [4, 5, 6, 7], "These": [4, 5, 6, 7, 16, 17, 18], "re": [4, 5, 6, 7, 16], "subset": [4, 5, 6, 7], "requir": [4, 5, 6, 7, 9, 12, 14, 16], "necessarili": [4, 5, 6, 7], "match": [4, 5, 6, 7], "never": [4, 5, 6, 7], "encod": [4, 5, 6, 7, 10], "indexerror": [4, 5, 6, 7], "happen": [4, 5, 6, 7], "element": [4, 5, 6, 7, 18], "selected_answ": [4, 5, 6, 7], "highdens": 4, "nonexist": 4, "cannot": 4, "hrvqa_datamodul": 4, "0x7f4773cf89a0": 4, "0x7f476ac933a0": 4, "four": [4, 5, 6, 7], "pin_memori": [4, 5, 6, 7, 18], "overwrit": [4, 5, 6, 7], "over": [5, 6, 14], "netherland": [5, 6], "lobri": [5, 6, 7, 16, 18], "zenodo": [5, 6, 7, 14], "onlin": [5, 6, 8], "1003": 5, "tif": [5, 6], "9945": 5, "usgs_split_test_answ": 5, "usgs_split_test_imag": 5, "usgs_split_test_phili_answ": 5, "usgs_split_test_phili_imag": 5, "usgs_split_test_phili_quest": 5, "usgs_split_test_quest": 5, "usgs_split_train_answ": 5, "usgs_split_train_imag": 5, "usgs_split_train_quest": 5, "usgs_split_val_answ": 5, "usgs_split_val_imag": 5, "usgs_split_val_quest": 5, "rsvqahr_dataset": 5, "256": [5, 6, 12], "4925": [5, 6], "2012": 5, "3953": 5, "1037": [5, 6], "2311": 5, "2045": 5, "2346": 5, "road": 5, "preconfigur": [5, 6, 7], "seen": [5, 6, 12], "try": [5, 6, 7, 9, 15, 18], "except": [5, 6, 7], "hr": 5, "grayscal": [5, 6], "unsupport": [5, 6], "test_phili": 5, "14": [5, 10], "too": [5, 6], "74": 5, "76": 5, "ye": [5, 6, 7, 18], "rsvqahr_datamodul": 5, "0x7f1a09157d60": 5, "0x7f1a09157f10": 5, "369": 5, "1476": 5, "origin": [5, 7], "sourc": [5, 14, 15], "philadelphia": 5, "switch": 5, "decid": [5, 12], "time": [5, 8, 9], "use_phili_test": 5, "36": 5, "88": 5, "01": [5, 17, 18], "000": [5, 14], "61": 5, "801": 5, "images_lr": 6, "9999": 6, "lr_split_test_answ": 6, "lr_split_test_imag": 6, "lr_split_test_quest": 6, "lr_split_train_answ": 6, "lr_split_train_imag": 6, "lr_split_train_quest": 6, "lr_split_val_answ": 6, "lr_split_val_imag": 6, "lr_split_val_quest": 6, "rsvqalr_dataset": 6, "3815": 6, "2009": 6, "3541": 6, "2030": [6, 7], "2019": [6, 16], "3923": 6, "2181": 6, "rural": 6, "urban": 6, "lr": [6, 17, 18], "filenam": 6, "space": [6, 8, 14], "77": 6, "48": 6, "rsvqalr_datamodul": 6, "0x7f1e1a1ac0a0": 6, "0x7f1ebcd0ecb0": 6, "401": 6, "1601": 6, "context": 7, "vqa_rsvqaxben": 7, "rsvqaxben_qa_train": 7, "rsvqaxben_qa_v": 7, "rsvqaxben_qa_test": 7, "rsvqaxben_dataset": 7, "2070": 7, "6138": [7, 18], "2556": [7, 18], "7976": 7, "2752": [7, 18], "4910": [7, 18], "artifici": 7, "present": [7, 15, 18], "qa": 7, "np": 7, "arrai": [7, 14], "154202": 7, "35it": 7, "567820": 7, "94it": 7, "96": 7, "288070": 7, "33it": 7, "mix": 7, "rsvqaxben_datamodul": [7, 18], "0x7f8e33a34190": 7, "0x7f8e3dda2170": 7, "member": 8, "leader": 8, "make": [8, 14, 16, 18], "particip": 8, "commun": [8, 9, 14], "harass": 8, "free": [8, 9, 11, 14], "experi": [8, 14], "everyon": [8, 9], "ag": 8, "visibl": 8, "invis": 8, "disabl": 8, "ethnic": 8, "sex": 8, "characterist": 8, "gender": 8, "ident": 8, "express": [8, 11], "level": [8, 16], "educ": 8, "socio": 8, "econom": [8, 14], "statu": [8, 14], "nation": 8, "person": [8, 11], "appear": 8, "race": 8, "religion": 8, "sexual": 8, "orient": 8, "act": 8, "interact": [8, 16], "wai": [8, 9, 15, 18], "contribut": 8, "welcom": [8, 9], "divers": [8, 14], "inclus": 8, "healthi": 8, "behavior": 8, "posit": 8, "environ": [8, 9], "demonstr": [8, 14], "empathi": 8, "kind": [8, 11], "toward": 8, "peopl": 8, "Being": 8, "opinion": 8, "viewpoint": 8, "give": 8, "gracefulli": 8, "accept": 8, "construct": 8, "apolog": 8, "those": 8, "affect": 8, "mistak": [8, 9], "learn": [8, 10], "focus": 8, "what": 8, "best": [8, 9], "just": [8, 17, 18], "u": [8, 17, 18], "individu": [8, 14], "overal": 8, "unaccept": 8, "imageri": 8, "attent": 8, "advanc": [8, 16], "ani": [8, 11, 14, 15], "troll": 8, "insult": 8, "derogatori": 8, "comment": 8, "polit": 8, "attack": 8, "privat": 8, "physic": 8, "email": 8, "address": 8, "explicit": 8, "permiss": [8, 11], "reason": 8, "consid": [8, 14], "inappropri": 8, "profession": 8, "clarifi": 8, "take": [8, 9], "appropri": 8, "fair": 8, "action": [8, 11, 14], "thei": [8, 14], "deem": 8, "threaten": 8, "offens": 8, "harm": 8, "right": [8, 10, 11], "edit": 8, "reject": 8, "commit": [8, 10], "wiki": 8, "issu": [8, 9, 14], "moder": 8, "decis": 8, "within": [8, 14], "repres": 8, "mail": 8, "post": 8, "social": 8, "media": 8, "appoint": 8, "offlin": 8, "event": [8, 11], "instanc": 8, "abus": 8, "report": 8, "l": 8, "hackel": [8, 11, 14], "tu": [8, 16], "berlin": [8, 16], "de": [8, 16], "complaint": 8, "review": 8, "investig": 8, "promptli": 8, "fairli": 8, "oblig": 8, "privaci": 8, "secur": 8, "incid": 8, "impact": 8, "consequ": 8, "violat": 8, "unprofession": 8, "unwelcom": 8, "written": 8, "clariti": 8, "around": [8, 17, 18], "explan": 8, "why": 8, "apologi": 8, "singl": [8, 17, 18], "seri": 8, "continu": 8, "involv": 8, "unsolicit": 8, "period": 8, "avoid": 8, "extern": 8, "term": 8, "seriou": 8, "sustain": 8, "sort": 8, "allow": [8, 15, 17, 18], "aggress": 8, "disparag": 8, "adapt": 8, "www": 8, "org": [8, 14, 16], "code_of_conduct": 8, "were": 8, "inspir": 8, "mozilla": 8, "ladder": 8, "common": [8, 10], "faq": 8, "translat": 8, "project": [9, 14], "effort": [9, 14], "thank": 9, "you": [9, 13, 14, 15, 19], "look": [9, 12], "help": 9, "framework": [9, 14, 15, 17, 18], "document": [9, 11, 14, 15, 16], "grow": 9, "coupl": 9, "broader": 9, "easiest": 9, "improv": 9, "highlight": 9, "further": 9, "refin": 9, "would": [9, 15], "discuss": 9, "someth": 9, "featur": [9, 14], "feel": 9, "github": [9, 14, 15], "tell": 9, "star": 9, "poetri": 9, "develop": [9, 14], "instal": [9, 14], "clone": 9, "repositori": [9, 16], "git": [9, 16], "com": 9, "lhackel": [9, 14], "tub": [9, 14], "cd": 9, "replic": 9, "your": 9, "speed": 9, "hack": 9, "pr": 9, "suit": 9, "still": 9, "successfulli": 9, "regener": 9, "our": [9, 16, 17, 18], "back": 9, "quickli": 9, "tool": [10, 14], "problem": 10, "numpi": [10, 17, 18], "24": 10, "timm": [10, 14, 18], "9": [10, 16], "26": 10, "appdir": 10, "matplotlib": 10, "scikit": 10, "bolt": 10, "post1": 10, "fvcore": 10, "post20221221": 10, "pyarrow": 10, "pydant": 10, "incompat": 10, "group": [10, 16], "psutil": 10, "dev": 10, "pytest": 10, "coverag": 10, "mock": 10, "furo": 10, "2022": 10, "03": 10, "myst": 10, "nb": 10, "17": 10, "sphinx": 10, "autobuild": 10, "2021": [10, 16], "sphinxcontrib": 10, "bibtex": 10, "preprocessor": 10, "jupyterlab": 10, "tensorboardx": 10, "xdist": 10, "mit": 11, "copyright": 11, "c": 11, "leonard": [11, 14], "wayn": 11, "herebi": 11, "grant": [11, 14], "charg": 11, "obtain": 11, "copi": 11, "softwar": [11, 14, 16], "associ": [11, 12], "deal": 11, "restrict": 11, "modifi": 11, "merg": 11, "sublicens": 11, "sell": 11, "permit": 11, "whom": 11, "furnish": 11, "do": [11, 17, 18], "subject": 11, "condit": 11, "abov": [11, 17, 18], "notic": 11, "shall": 11, "substanti": 11, "portion": 11, "THE": 11, "AS": 11, "warranti": 11, "OF": 11, "OR": 11, "impli": 11, "BUT": 11, "NOT": 11, "TO": 11, "merchant": 11, "FOR": 11, "particular": 11, "purpos": 11, "AND": 11, "noninfring": 11, "IN": 11, "NO": 11, "author": [11, 14], "holder": 11, "BE": 11, "liabl": 11, "claim": 11, "damag": 11, "liabil": 11, "whether": 11, "contract": 11, "tort": 11, "aris": [11, 14], "connect": 11, "WITH": 11, "central": 12, "dataclass": 12, "ilmconfigur": [12, 17, 18], "part": [12, 13, 19], "consist": 12, "task": [12, 15], "ultim": 12, "solv": 12, "minim": [12, 14], "supervis": [12, 15], "properti": 12, "unus": 12, "type": 12, "fusion": 12, "ilmtyp": [12, 17, 18], "model_config": [12, 17, 18], "timm_model_nam": [12, 17, 18], "resnet18": [12, 17, 18], "str": 12, "param": 12, "hf_model_nam": [12, 17, 18], "class_nam": 12, "network_typ": [12, 17, 18], "enum": 12, "image_classif": [12, 17], "visual_features_out": 12, "512": 12, "fusion_in": 12, "fusion_out": 12, "fusion_hidden": 12, "v_dropout_r": 12, "float": [12, 17, 18], "t_dropout_r": 12, "fusion_dropout_r": 12, "fusion_method": 12, "callabl": 12, "mul": 12, "fusion_activ": 12, "tanh": 12, "drop_rat": 12, "use_pooler_output": 12, "bool": 12, "max_sequence_length": 12, "load_timm_if_avail": 12, "load_hf_if_avail": 12, "facilit": 12, "code": [12, 16], "global": 12, "variabl": 12, "vqa_classif": [12, 18], "content": [13, 19], "select": [13, 17, 18, 19], "activ": [13, 14, 19], "beta": 14, "wip": [14, 19], "librari": [14, 16, 18], "state": 14, "art": 14, "seek": 14, "rapidli": 14, "iter": 14, "conveni": 14, "implement": 14, "seamlessli": 14, "popular": 14, "highli": 14, "regard": 14, "huggingfac": [14, 18], "With": 14, "extens": 14, "nearli": 14, "upload": 14, "offer": 14, "rang": [14, 17, 18], "Its": 14, "vast": 14, "unparallel": 14, "resourc": 14, "innov": 14, "sophist": 14, "furthermor": 14, "boast": 14, "friendli": 14, "interfac": 14, "streamlin": 14, "exchang": 14, "compon": 14, "thu": 14, "endless": 14, "novel": 14, "built": 14, "throughput": 14, "optim": [14, 17, 18], "r": 14, "moreov": 14, "comprehens": 14, "instruct": 14, "tutori": 14, "overview": 14, "ensur": 14, "smooth": 14, "hassl": 14, "outlin": 14, "process": [14, 16], "upcom": 14, "subsequ": 14, "explor": [14, 16], "exemplifi": 14, "encourag": 14, "visit": 14, "dedic": 14, "receiv": 14, "assist": 14, "submit": 14, "platform": 14, "cite": 14, "lhackel_tub_2023": 14, "kai": 14, "norman": 14, "clasen": 14, "beg\u00fcm": [14, 16], "demir": [14, 16], "titl": 14, "v0": 14, "month": 14, "apr": 14, "year": 14, "doi": [14, 16], "5281": 14, "7998032": 14, "url": [14, 16], "7875799803206": 14, "european": 14, "research": [14, 16], "council": 14, "erc": 14, "2017": 14, "stg": 14, "bigearth": 14, "under": 14, "759764": 14, "agenc": 14, "da4dt": 14, "precursor": 14, "digit": 14, "twin": 14, "earth": 14, "german": 14, "ministri": 14, "affair": 14, "climat": 14, "ai": 14, "cube": 14, "50ee2012b": 14, "pypi": 15, "pip": 15, "directli": 15, "want": 15, "wheel": 15, "equat": 15, "py3": 15, "whl": 15, "them": 15, "pretrain": [15, 18], "fashion": [15, 17, 18], "checkpoint": 15, "explain": 15, "next": 15, "been": 15, "togeth": 15, "googl": 15, "colab": 15, "show": 15, "link": 16, "mm": 16, "nomenclatur": 16, "everi": 16, "run": 16, "procedur": 16, "tensorflow": 16, "rsim": 16, "s2_43": 16, "classes_model": 16, "s2_19": 16, "simultan": 16, "mm_19": 16, "s1_tool": 16, "geotiff": 16, "script": [16, 17, 18], "1c": 16, "grd": 16, "tile": 16, "disk": 16, "s2_tool": 16, "while": [16, 17, 18], "skip": 16, "cloudi": 16, "snowi": 16, "archiv": 16, "mm_tool": 16, "kun": 16, "georg": 16, "vosselman": 16, "michael": 16, "ying": 16, "yang": 16, "visual": 16, "benchmark": 16, "arxiv": 16, "preprint": 16, "2301": 16, "09460": 16, "sylvain": 16, "beg": 16, "\u00fc": 16, "m": 16, "devi": 16, "tuia": 16, "meet": 16, "larg": 16, "scale": 16, "ieee": 16, "intern": [16, 17, 18], "geoscienc": 16, "symposium": 16, "igarss": 16, "1218": 16, "1221": 16, "diego": 16, "marco": 16, "jess": 16, "murrai": 16, "transact": 16, "58": 16, "8555": 16, "8566": 16, "2020": 16, "mengy": 16, "ryan": 16, "kiro": 16, "richard": 16, "zemel": 16, "neural": [16, 18], "system": 16, "2015": 16, "gencer": 16, "marcela": 16, "charfuelan": 16, "volker": 16, "markl": 16, "understand": 16, "juli": 16, "1109": 16, "8900532": 16, "arn": 16, "wall": 16, "tristan": 16, "kreuzig": 16, "filip": 16, "marcelino": 16, "hugo": 16, "costa": 16, "pedro": 16, "benevid": 16, "mario": 16, "caetano": 16, "multimod": 16, "retriev": 16, "geosci": 16, "sen": 16, "mag": 16, "174": 16, "180": 16, "septemb": 16, "mgr": 16, "3089174": 16, "ipynb": [17, 18], "trainer": [17, 18], "integr": [17, 18], "lightningmodul": [17, 18], "pl": [17, 18], "loop": [17, 18], "necessari": [17, 18], "training_step": [17, 18], "configure_optim": [17, 18], "add": [17, 18], "step": [17, 18], "evalu": [17, 18], "_step": [17, 18], "_epoch_end": [17, 18], "self": [17, 18], "_output_list": [17, 18], "epoch": [17, 18], "litimageencod": 17, "wrapper": [17, 18], "among": [17, 18], "thing": [17, 18], "gpu": [17, 18], "cpu": [17, 18], "def": [17, 18], "__init__": [17, 18], "config": [17, 18], "1e": [17, 18], "super": [17, 18], "val_output_list": [17, 18], "test_output_list": [17, 18], "batch_idx": [17, 18], "y": [17, 18], "x_hat": [17, 18], "loss": [17, 18], "binary_cross_entropy_with_logit": [17, 18], "log": [17, 18], "adamw": [17, 18], "weight_decai": [17, 18], "mandatori": [17, 18], "validation_step": [17, 18], "on_validation_epoch_start": [17, 18], "on_validation_epoch_end": [17, 18], "avg_loss": [17, 18], "stack": [17, 18], "test_step": [17, 18], "on_test_epoch_start": [17, 18], "on_test_epoch_end": [17, 18], "forward": [17, 18], "inner": [17, 18], "manual": [17, 18], "tensorboard": [17, 18], "callback": [17, 18], "hyperparamet": [17, 18], "model_nam": 17, "number_of_channel": [17, 18], "5e": [17, 18], "Then": [17, 18], "later": [17, 18], "spawn": [17, 18], "subprocess": [17, 18], "seed_everyth": [17, 18], "max_epoch": [17, 18], "acceler": [17, 18], "log_every_n_step": [17, 18], "logger": [17, 18], "final": [17, 18], "bendatamodul": 17, "quit": [17, 18], "bit": [17, 18], "readabl": [17, 18], "sinc": [17, 18], "color": [17, 18], "slightli": [17, 18], "distort": [17, 18], "anywai": [17, 18], "real": [17, 18], "7550816535949707": 17, "320548951625824": 17, "65679931640625": 17, "4799841642379761": 17, "8050575852394104": 17, "4397601783275604": 17, "839691162109375": 17, "9487237930297852": 17, "7498438954353333": 17, "9058451652526855": 17, "004557435400784016": 17, "8555901050567627": 17, "5166867971420288": 17, "9608004689216614": 17, "9153728485107422": 17, "7557512521743774": 17, "5817127227783203": 17, "9797934293746948": 17, "7838466167449951": 17, "either": 18, "weight": 18, "composit": 18, "instead": 18, "_disassemble_batch": 18, "disassembl": 18, "litvqaencod": 18, "transpos": 18, "tolist": 18, "t": 18, "image_model_nam": 18, "text_model_nam": 18, "warn": 18, "known": 18, "keyword": 18, "convolut": 18, "cnn": 18, "resnet": 18, "oper": 18, "independ": 18, "rsvqaxbendatamodul": 18, "get_token": 18, "140": 18, "userwarn": 18, "unknown": 18, "ignor": 18, "restart": 18, "115": 18, "again": 18, "heterogen": 18, "1998": 18, "21770": 18, "10624": 18, "6914": 18, "14769": 18, "3493223786354065": 18, "3443600833415985": 18, "5000567436218262": 18, "8526687026023865": 18, "9373693466186523": 18, "6275889277458191": 18, "08152499794960022": 18, "1940683126449585": 18, "2362317144870758": 18, "3389194905757904": 18}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"us": 0, "bigearthnet": [0, 2, 16], "lmdb": 0, "reader": 0, "select": [0, 2, 4, 5, 6, 7], "band": [0, 2, 5, 6, 7], "label": 0, "type": 0, "mean": 0, "standard": [0, 8], "deviat": 0, "dataset": [1, 3, 17, 18], "datamodul": 1, "bendataset": 2, "split": [2, 4, 5, 6, 7], "restrict": [2, 4, 5, 6, 7], "number": [2, 4, 5, 6, 7], "load": [2, 4, 5, 6, 7], "imag": [2, 4, 5, 6, 7, 13, 17], "bendatamodul": 2, "dataload": [2, 4, 5, 6, 7], "set": [2, 4, 5, 6, 7], "coco": 3, "qa": 3, "cocoqa": 3, "hrvqa": 4, "hrvqadataset": 4, "token": [4, 5, 6, 7], "class": [4, 5, 6, 7], "specif": [4, 5, 6, 7], "answer": [4, 5, 6, 7, 18], "hrvqadatamodul": 4, "rsvqa": [5, 6], "high": 5, "resolut": [5, 6], "rsvqahrdataset": 5, "rsvqahrdatamodul": 5, "differ": 5, "test": 5, "low": 6, "rsvqalrdataset": 6, "rsvqalrdatamodul": 6, "rsvqaxben": 7, "rsvqaxbendataset": 7, "rsvqaxbendatamodul": 7, "contributor": 8, "coven": 8, "code": [8, 9], "conduct": 8, "our": 8, "pledg": 8, "enforc": 8, "respons": 8, "scope": 8, "guidelin": 8, "1": 8, "correct": 8, "2": 8, "warn": 8, "3": 8, "temporari": 8, "ban": 8, "4": 8, "perman": 8, "attribut": 8, "contribut": 9, "give": 9, "feedback": 9, "increas": 9, "visibl": 9, "directli": 9, "updat": 9, "sourc": 9, "notebook": 9, "depend": 10, "python": 10, "poetri": 10, "licens": 11, "model": [12, 16, 17, 18], "configur": [12, 17, 18], "wip": 13, "caption": 13, "configilm": 14, "instal": 15, "further": 16, "refer": 16, "The": 16, "guid": 16, "pretrain": 16, "tool": 16, "bibliographi": 16, "supervis": 17, "classif": 17, "pytorch": [17, 18], "lightn": [17, 18], "modul": [17, 18], "creat": [17, 18], "run": [17, 18], "visual": 18, "question": 18, "vqa": 18}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 57}, "alltitles": {"Using the BigEarthNet LMDB Reader": [[0, "using-the-bigearthnet-lmdb-reader"]], "Selecting Bands": [[0, "selecting-bands"], [2, "selecting-bands"], [5, "selecting-bands"], [6, "selecting-bands"], [7, "selecting-bands"]], "Label types": [[0, "label-types"]], "Mean and Standard Deviation": [[0, "mean-and-standard-deviation"]], "DataSets and DataModules": [[1, "datasets-and-datamodules"]], "BigEarthNet": [[2, "bigearthnet"]], "BENDataSet": [[2, "bendataset"]], "Splits": [[2, "splits"], [4, "splits"], [5, "splits"], [6, "splits"], [7, "splits"]], "Restricting the number of loaded images": [[2, "restricting-the-number-of-loaded-images"], [4, "restricting-the-number-of-loaded-images"], [5, "restricting-the-number-of-loaded-images"], [6, "restricting-the-number-of-loaded-images"], [7, "restricting-the-number-of-loaded-images"]], "BENDataModule": [[2, "bendatamodule"]], "DataLoader settings": [[2, "dataloader-settings"], [4, "dataloader-settings"], [5, "dataloader-settings"], [6, "dataloader-settings"], [7, "dataloader-settings"]], "COCO-QA": [[3, "coco-qa"]], "COCOQA DataSet": [[3, "cocoqa-dataset"]], "HRVQA": [[4, "hrvqa"]], "HRVQADataSet": [[4, "hrvqadataset"]], "Tokenizer and Tokenization": [[4, "tokenizer-and-tokenization"], [5, "tokenizer-and-tokenization"], [6, "tokenizer-and-tokenization"], [7, "tokenizer-and-tokenization"]], "Select Number of Classes or specific Answers": [[4, "select-number-of-classes-or-specific-answers"], [5, "select-number-of-classes-or-specific-answers"], [6, "select-number-of-classes-or-specific-answers"], [7, "select-number-of-classes-or-specific-answers"]], "HRVQADataModule": [[4, "hrvqadatamodule"]], "RSVQA high resolution": [[5, "rsvqa-high-resolution"]], "RSVQAHRDataSet": [[5, "rsvqahrdataset"]], "RSVQAHRDataModule": [[5, "rsvqahrdatamodule"]], "Different Test split": [[5, "different-test-split"]], "RSVQA low resolution": [[6, "rsvqa-low-resolution"]], "RSVQALRDataSet": [[6, "rsvqalrdataset"]], "RSVQALRDataModule": [[6, "rsvqalrdatamodule"]], "RSVQAxBEN": [[7, "rsvqaxben"]], "RSVQAxBENDataSet": [[7, "rsvqaxbendataset"]], "RSVQAxBENDataModule": [[7, "rsvqaxbendatamodule"]], "Contributor Covenant Code of Conduct": [[8, "contributor-covenant-code-of-conduct"]], "Our Pledge": [[8, "our-pledge"]], "Our Standards": [[8, "our-standards"]], "Enforcement Responsibilities": [[8, "enforcement-responsibilities"]], "Scope": [[8, "scope"]], "Enforcement": [[8, "enforcement"]], "Enforcement Guidelines": [[8, "enforcement-guidelines"]], "1. Correction": [[8, "correction"]], "2. Warning": [[8, "warning"]], "3. Temporary Ban": [[8, "temporary-ban"]], "4. Permanent Ban": [[8, "permanent-ban"]], "Attribution": [[8, "attribution"]], "Contributing": [[9, "contributing"]], "Give feedback": [[9, "give-feedback"]], "Increasing visibility": [[9, "increasing-visibility"]], "Directly update source code or notebooks": [[9, "directly-update-source-code-or-notebooks"]], "Dependencies": [[10, "dependencies"]], "Python (Poetry) Dependencies": [[10, "python-poetry-dependencies"]], "License": [[11, "license"]], "Model Configuration": [[12, "model-configuration"]], "[WIP] Image Captioning": [[13, "wip-image-captioning"]], "ConfigILM": [[14, "configilm"]], "Installation": [[15, "installation"]], "Further references": [[16, "further-references"]], "The BigEarthNet Guide": [[16, "the-bigearthnet-guide"]], "Pretrained models": [[16, "pretrained-models"]], "BigEarthNet Tools": [[16, "bigearthnet-tools"]], "Bibliography": [[16, "bibliography"]], "Supervised Image Classification": [[17, "supervised-image-classification"]], "Pytorch Lightning Module": [[17, "pytorch-lightning-module"], [18, "pytorch-lightning-module"]], "Configuring": [[17, "configuring"], [18, "configuring"]], "Creating Model + Dataset": [[17, "creating-model-dataset"], [18, "creating-model-dataset"]], "Running": [[17, "running"], [18, "running"]], "Visual Question Answering (VQA)": [[18, "visual-question-answering-vqa"]]}, "indexentries": {}})