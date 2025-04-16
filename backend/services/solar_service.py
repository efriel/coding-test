import requests
from config.settings import settings

def ask_solar(prompt):
    headers = {
        "Authorization": f"Bearer {settings.SOLAR_API_KEY}",
        "Content-Type": "application/json"
    }
    data = {"prompt": prompt, "max_tokens": 512}
    response = requests.post("https://api.solar.example.com/chat", headers=headers, json=data)
    return response.json().get("response", "No response")