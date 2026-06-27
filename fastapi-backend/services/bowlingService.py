from fastapi import FastAPI
from data.dataset import data

def mostWickets(head):

    result = (data[data["wicket_kind"]
                   .notna()]
                   .groupby("bowler")["bowler"]
                   .value_counts()
                   .sort_values(ascending=False)
                   .reset_index()
                   .head(head)
                   .rename(columns={"bowler":"name" , "count":"value"})
                   .to_dict(orient="records"))
    return {
        "heading":"Most Wickets By Bowler",
        "data":result,
        "unit":"Wickets",
        "detail":"Fine"
    }

