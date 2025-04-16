from services.custom_service import ask_custom_model

def test_ask_custom_model(mocker):
    """
    Test the ask_custom_model function with a mocked response.
    """
    mock_response = {"answer": "Searching in custom AI model will be available soon."}
    mocker.patch("requests.post", return_value=mocker.Mock(status_code=200, json=lambda: mock_response))

    prompt = "What is the weather today?"
    response = ask_custom_model(prompt)
    assert response == mock_response["answer"]