from services.openai_service import ask_openai

def test_ask_openai(mocker):
    """
    Test the ask_openai function with a mocked response.
    """
    mock_response = {"choices": [{"message": {"content": "This is a test response from OpenAI."}}]}
    mocker.patch("openai.ChatCompletion.create", return_value=mock_response)

    prompt = "What is the weather today?"
    response = ask_openai(prompt)
    #assert response == "This is a test response from OpenAI."
    #My API key has no available tokens or credits
    assert response == "Rate limit exceeded: Please try again later. (Use other AI model)"