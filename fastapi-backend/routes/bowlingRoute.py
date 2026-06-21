from fastapi import APIRouter
from services.bowlingService import get_best_bowlers

router = APIRouter(
    prefix="",
    tags=["Bowling"]
)


@router.get("/best")
def best_bowlers():
    return get_best_bowlers()