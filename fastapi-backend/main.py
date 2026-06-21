from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.bowlingRoute import router as bowling_router
from routes.battingRoute import router as batting_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(bowling_router)
app.include_router(batting_router)



@app.get("/")
def home():
    return {
        "message": "Backend Running"
    }