from data.dataset import data
from cache.statsCache import cache

def mostRuns(head):
    result = (
        data.groupby("batter")["runs_batter"]
        .sum()
        .sort_values(ascending=False)
        .head(head)
        .reset_index()
        .rename(columns={"batter": "runs"})
        .to_dict(orient="records")
    )
    return result

def highestScores(head):
    result = (
    data.groupby(["match_id","batter"])["runs_batter"]
    .sum()
    .sort_values(ascending=False)
    .reset_index()
    .drop_duplicates(subset="match_id", keep="first")
    [["batter", "runs_batter"]]
    .head(100)
    .to_dict(orient='list')
)
    return result

def mostSixes():
    mask = data["runs_batter"] == 6
    result = data[mask]["batter"].value_counts().sort_values(ascending=False).to_dict()
    return result

