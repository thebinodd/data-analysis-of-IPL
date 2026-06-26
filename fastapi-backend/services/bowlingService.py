from fastapi import FastAPI
from data.dataset import data

def mostWickets(head):

    result = data[data["wicket_kind"].notna()].groupby("bowler")["bowler"].value_counts().sort_values(ascending=False).head(head).to_dict()
    return {
        "heading":"Most Wickets By Bowler",
        "data":result,
        "unit":"Wickets",
        "detail":"Fine"
    }

