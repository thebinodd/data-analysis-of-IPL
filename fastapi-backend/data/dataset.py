import pandas as pd
import os
import gdown

FILE_ID = "16HBfourvU0XTMUqfiHD9uuoLnc5XQFpm"

if not os.path.exists("ipl.csv"):
    gdown.download(
        f"https://drive.google.com/uc?id={FILE_ID}",
        "ipl.csv",
        quiet=False
    )

data = pd.read_csv("ipl.csv", low_memory=False)
