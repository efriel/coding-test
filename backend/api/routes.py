from fastapi import APIRouter
from typing import Optional, List
from models.schemas import AIRequest, AIResponse
import json
from pathlib import Path

router = APIRouter()

# Load dummy data from data folder
dummy_path = Path(__file__).resolve().parent.parent / "data" / "dummyData.json"
with open(dummy_path, "r") as f:
    DUMMY_DATA = json.load(f)

"""
Routes for the FastAPI application.

This module defines the API endpoints for interacting with sales representatives
and generating sales summaries.

Endpoints:
- /api/sales-reps: Retrieve a list of sales representatives and their details.
- /api/sales-summary: Generate a summary of sales data with optional filters.
"""

@router.get("/api/sales-reps")
def get_sales_reps():
    """
    Provides a list of sales representatives with their details.

    Returns:
        - A list of sales representatives with their details.

    Example Response:
    {
        "salesReps": [
            {
                "name": "Alice",
                "role": "Senior Sales Executive",
                "region": "North America",
                "skills": ["Negotiation", "CRM", "Client Relations"],
                "deals": [
                    { "client": "Omega Inc", "value": 85000, "status": "Closed Lost" }
                ],
                "clients": [
                    { "name": "Gamma Inc", "industry": "Tech", "contact": "info@gammainc.com" },
                    { "name": "Delta LLC", "industry": "Finance", "contact": "support@deltallc.com" }
                ]
            },
            {
                "name": "Bob",
                "role": "Sales Representative",
                "region": "Europe",
                "skills": ["Lead Generation", "Presentation", "Negotiation"],
                "deals": [],
                "clients": []
            }
        ]
    }
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


@router.get("/api/sales-summary")
def get_sales_summary(
    region: Optional[str] = None,
    role: Optional[str] = None,
    status: Optional[str] = None
):
    """
    Provides a summary of sales representatives and their activities.

    Parameters:
    - region (str, optional): Filter sales data by region.
    - role (str, optional): Filter sales data by role.
    - status (str, optional): Filter sales data by deal status.

    Returns:
        - totalSalesReps (int): Total number of sales representatives.
        - filteredSalesReps (int): Number of sales representatives after applying filters.
        - roles (list): Unique roles of the sales representatives.
        - regions (list): Unique regions covered by the sales representatives.
        - uniqueSkills (list): Unique skills across all sales representatives.
        - totalDeals (int): Total number of deals across all sales representatives.
        - totalClients (int): Total number of unique clients.
        - totalValue (int): Total value of all deals.
        - statusBreakdown (dict): Breakdown of deal statuses (e.g., Closed Won, In Progress).
        - industries (list): Unique industries of the clients.

        Example Response:
    {
        "totalSalesReps": 5,
        "roles": ["Account Manager", "Sales Representative"],
        "regions": ["North America", "Europe"],
        "uniqueSkills": ["Negotiation", "CRM"],
        "totalDeals": 15,
        "totalClients": 10,
        "totalValue": 1235000,
        "statusBreakdown": {
            "Closed Won": 5,
            "In Progress": 5,
            "Closed Lost": 5
        },
        "industries": ["Tech", "Finance", "Healthcare"]
    }
    """
    all_reps = DUMMY_DATA["salesReps"]
    filtered_reps = all_reps

    # Apply filters to reps
    if region:
        filtered_reps = [rep for rep in filtered_reps if rep["region"].lower() == region.lower()]
    if role:
        filtered_reps = [rep for rep in filtered_reps if rep["role"].lower() == role.lower()]

    total_deals = 0
    total_value = 0
    status_count = {}
    skills_set = set()
    industries_set = set()
    clients_seen = set()

    for rep in filtered_reps:
        for deal in rep["deals"]:
            if status and deal["status"].lower() != status.lower():
                continue
            total_deals += 1
            total_value += deal["value"]
            status_count[deal["status"]] = status_count.get(deal["status"], 0) + 1
        for skill in rep["skills"]:
            skills_set.add(skill)
        for client in rep["clients"]:
            industries_set.add(client["industry"])
            clients_seen.add(client["name"])

    summary = {
        "totalSalesReps": len(all_reps),
        "filteredSalesReps": len(filtered_reps),
        "roles": list({rep["role"] for rep in filtered_reps}),
        "regions": list({rep["region"] for rep in filtered_reps}),
        "uniqueSkills": sorted(list(skills_set)),
        "totalDeals": total_deals,
        "totalClients": len(clients_seen),
        "totalValue": total_value,
        "statusBreakdown": status_count,
        "industries": sorted(list(industries_set))
    }

    return summary


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
