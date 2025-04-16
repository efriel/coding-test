from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_sales_reps():
    """
    Test the /api/sales-reps endpoint.
    """
    response = client.get("/api/sales-reps")
    assert response.status_code == 200
    assert "salesReps" in response.json()

def test_get_sales_summary():
    """
    Test the /api/sales-summary endpoint.
    """
    response = client.get("/api/sales-summary")
    assert response.status_code == 200
    assert "totalSalesReps" in response.json()