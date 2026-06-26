from data.dataset import data
from cache.statsCache import cache

def mostRuns(head):
    result = (
        data.groupby("batter")["runs_batter"]
        .sum()
        .sort_values(ascending=False)
        .head(head)
        .to_dict()
    )
    return {
        "heading":"Most Runs By Batsman",
        "data":result,
        "unit":"Runs"
    }

def highestScores(head):
    result = (
        data.groupby(["match_id", "batter"])["runs_batter"]
        .sum()
        .sort_values(ascending=False)
        .reset_index()
        .drop_duplicates(subset="match_id", keep="first")
        [["batter", "runs_batter"]]
        .head(100)
        .to_dict("records")
    )

    return {
        "heading": "Most Score By Individual Batsman",
        "data": result,
        "unit": "Runs"
    }

def mostSixes(head):
    mask = data["runs_batter"] == 6
    result = data[mask]["batter"].value_counts().sort_values(ascending=False).head(head).to_dict()
    return {
        "heading":"Most Sixes By Batsman",
        "data":result,
        "unit":"Sixes"
    }

