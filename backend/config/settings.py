"""
Settings Module

This module is responsible for managing configuration settings for the application. 
It loads environment variables using the `python-dotenv` library and provides a centralized 
place to access these settings throughout the application.

Environment Variables:
- OPENAI_API_KEY: The API key for accessing OpenAI services.
- GEMINI_API_KEY: The API key for accessing Gemini AI services.
- CUSTOM_AI_URL: The URL for the custom AI service endpoint.
- AI_DEFAULT_MODEL: The default AI model to use (e.g., "openai", "gemini", "custom").
  Defaults to "gemini" if not specified.

How It Works:
- The `dotenv` library is used to load environment variables from a `.env` file into the application.
- These variables are accessed using `os.getenv` and stored as attributes in the `Settings` class.
- The `settings` instance provides a convenient way to access these configuration values.

Example Usage:
>>> from config.settings import settings
>>> print(settings.OPENAI_API_KEY)
"""

import os
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv()

class Settings:
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")  # OpenAI API key
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")  # Gemini AI API key
    CUSTOM_AI_URL = os.getenv("CUSTOM_AI_URL")  # Custom AI service URL
    AI_DEFAULT_MODEL = os.getenv("AI_DEFAULT_MODEL", "gemini")  # Default AI model (default: "gemini")

# Create a single instance of the Settings class to be used throughout the application
settings = Settings()
