from fastapi import APIRouter
from models.schemas import AIRequest, AIResponse
import json
from pathlib import Path

router = APIRouter()

# Load dummy data from data folder
dummy_path = Path(__file__).resolve().parent.parent / "data" / "dummyData.json"
with open(dummy_path, "r") as f:
    DUMMY_DATA = json.load(f)

@router.get("/api/data")
def get_data():
    """
    Returns dummy data (e.g., list of users).
    """
    return DUMMY_DATA

@router.post("/api/ai", response_model=AIResponse)
async def ai_endpoint(payload: AIRequest):
    """
    Accepts a user question and returns a placeholder AI response.
    (Optionally integrate a real AI model or external service here.)
    """
    body = await payload.json()
    user_question = body.get("question", "")
    
    # Placeholder logic: echo the question or generate a simple response
    # Replace with real AI logic as desired (e.g., call to an LLM).
    return {"answer": f"This is a placeholder answer to your question: {user_question}"}
