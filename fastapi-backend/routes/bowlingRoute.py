from services.bowlingService import mostWickets
from fastapi import APIRouter

router = APIRouter(
    prefix="",
    tags=["Bowling"]
)
@router.get("/most_wickets")
def most_wickets(head:int):
   return mostWickets(head)