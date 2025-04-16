import requests
from config.settings import settings

def ask_llama(prompt):
    headers = {
        "Authorization": f"Bearer {settings.LLAMA_API_KEY}",
        "Content-Type": "application/json"
    }
    data = {"prompt": prompt, "max_tokens": 512}
    response = requests.post("https://api.llama.example.com/generate", headers=headers, json=data)
    return response.json().get("text", "No response")