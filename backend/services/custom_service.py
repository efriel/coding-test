import requests
from config.settings import settings

def ask_custom_model(prompt):
    response = requests.post(
        # settings.CUSTOM_AI_URL,
        json={"prompt": prompt}
    )
    return response.json().get("response", "No response from custom AI.")