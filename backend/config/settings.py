import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
    CUSTOM_AI_URL = os.getenv("CUSTOM_AI_URL")
    AI_DEFAULT_MODEL = os.getenv("AI_DEFAULT_MODEL", "gemini")

settings = Settings()
