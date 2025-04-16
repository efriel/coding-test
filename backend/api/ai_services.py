"""
AI Services Module

This module provides functionality for interacting with various AI models, including OpenAI, Gemini, Llama, Solar, 
and custom AI services. It handles the selection of the appropriate AI model based on the configuration or user input 
and processes the question using the selected model.

Key Functions:
- `ask_ai`: Routes the question to the appropriate AI model and returns the response.

Dependencies:
- Configuration settings for default AI model selection.
- Utility functions for loading sales data and building prompts.
- Service modules for interacting with specific AI models.
"""

from config.settings import settings
from utils.data_loader import load_sales_data
from utils.prompt_builder import build_sales_prompt

from services.openai_service import ask_openai
from services.gemini_service import ask_gemini
from services.custom_service import ask_custom_model

MODEL_HANDLERS = {
    "openai": ask_openai,
    "gemini": ask_gemini,
    "custom": ask_custom_model,
}

def ask_ai(question, model=None):
    """
    Routes the question to the appropriate AI model and returns the response.

    Parameters:
    - question (str): The question to be processed by the AI model.
    - model (str, optional): The AI model to use. If not provided, the default model from settings is used.

    Returns:
    - str: The response from the selected AI model, or an error message if the model is invalid.

    Example Usage:
    >>> response = ask_ai("What is the total revenue?", model="openai")
    >>> print(response)
    """
    model = model or settings.AI_DEFAULT_MODEL
    sales_data = load_sales_data()
    prompt = build_sales_prompt(question, sales_data)

    handler = MODEL_HANDLERS.get(model)
    if handler:
        return handler(prompt)
    return "Invalid model selected."
