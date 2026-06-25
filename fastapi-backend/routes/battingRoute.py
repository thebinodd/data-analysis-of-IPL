from fastapi import APIRouter
from services.battingService import mostRuns , highestScores 

router = APIRouter(
    prefix="",
    tags=["Batting"]
)


@router.get("/most_runs")
def most_runs(head:int):
    return mostRuns(head)

@router.get("/highest_scores")
def highest_scores(head:int):
    return highestScores(head)
