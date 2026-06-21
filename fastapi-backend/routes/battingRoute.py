from fastapi import APIRouter
from services.bowlingService import get_best_bowlers
from services.battingService import mostRuns , mostsixes

router = APIRouter(
    prefix="",
    tags=["Bowling"]
)


@router.get("/mostruns")
def most_runs():
    return mostRuns()

@router.get("/mostsixes")
def most_sixes():
    return mostsixes()