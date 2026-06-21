from data.dataset import df
from cache.statsCache import cache


def get_best_bowlers():

    if "best_bowlers" in cache:
        print("Cache hit for best bowlers")
        return cache["best_bowlers"]

    mask = df["wicket_kind"] == "caught"
    data = df[mask]
    result = data["batter"].value_counts().sort_values(ascending=False).to_dict()

    print("Cache miss for best bowlers")

    cache["best_bowlers"] = result

    return result