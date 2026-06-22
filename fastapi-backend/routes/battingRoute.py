from fastapi import APIRouter
from services.bowlingService import get_best_bowlers
from services.battingService import mostRuns , mostsixes

router = APIRouter(
    prefix="",
    tags=["Batting"]
)


@router.get("/mostRuns")
def most_runs(head:int):
    return mostRuns(head)

@router.get("/mostsixes")
def most_sixes():
    return mostsixes()