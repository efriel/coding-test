from fastapi import APIRouter
from models.schemas import AIRequest, AIResponse
import json
from pathlib import Path

router = APIRouter()

# Load dummy data from data folder
dummy_path = Path(__file__).resolve().parent.parent / "data" / "dummyData.json"
with open(dummy_path, "r") as f:
    DUMMY_DATA = json.load(f)

@router.get("/api/sales-reps")
def get_sales_reps():
    """
    Returns a list of sales representatives with their details.
    """
    sales_reps = [
        {
            "name": rep["name"],
            "role": rep["role"],
            "region": rep["region"],
            "skills": rep["skills"],
            "deals": rep["deals"],
            "clients": [
                {
                    "name": client["name"],
                    "industry": client["industry"],
                    "contact": client["contact"]
                }
                for client in rep["clients"]
            ]
        }
        for rep in DUMMY_DATA["salesReps"]
    ]
    return {"salesReps": sales_reps}

@router.post("/api/ai", response_model=AIResponse)
async def ai_endpoint(payload: AIRequest):
    """
    Accepts a user question and returns a placeholder AI response.
    (Optionally integrate a real AI model or external service here.)
    """
    user_question = payload.question
    
    # Placeholder logic: echo the question or generate a simple response
    # Replace with real AI logic as desired (e.g., call to an LLM).
    return {"answer": f"This is a placeholder answer to your question: {user_question}"}
