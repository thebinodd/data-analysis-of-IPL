from data.dataset import df
from cache.statsCache import cache

def mostRuns():
    
    if "mostRuns" in cache:
        return mostRuns
    else:
        batsman = df.groupby("batter")
        result = batsman["runs_batter"].sum().sort_values(ascending=False).to_dict()
        return result

def mostsixes():

    if "mostsixes" in cache:
        return mostsixes
    else:
        mask = df["runs_batter"] == 6
        result = df[mask]["batter"].value_counts().sort_values(ascending=False).to_dict()
        return result

