import pandas as pd
import os



data = pd.read_csv("datasets/ipl.csv.gz", low_memory=False , compression='gzip')
