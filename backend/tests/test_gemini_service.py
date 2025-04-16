from services.gemini_service import ask_gemini

def test_ask_gemini(mocker):
    """
    Test the ask_gemini function with a mocked response.
    """
    mock_response = {"candidates": [{"content": {"parts": [{"text": "This is a test response from Gemini."}]}}]}
    mocker.patch("requests.post", return_value=mocker.Mock(status_code=200, json=lambda: mock_response))

    prompt = "What is the weather today?"
    response = ask_gemini(prompt)
    assert response == "This is a test response from Gemini."