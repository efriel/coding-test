from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_app_running():
    """
    Test if the FastAPI application initializes correctly.
    """
    response = client.get("/")
    assert response.status_code in [404, 200], "Root endpoint should return 404 or 200."