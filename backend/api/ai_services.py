from config.settings import settings
from utils.data_loader import load_sales_data
from utils.prompt_builder import build_sales_prompt

from services.openai_service import ask_openai
from services.gemini_service import ask_gemini
from services.llama_service import ask_llama
from services.solar_service import ask_solar
from services.custom_service import ask_custom_model

MODEL_HANDLERS = {
    "openai": ask_openai,
    "gemini": ask_gemini,
    "llama": ask_llama,
    "solar": ask_solar,
    "custom": ask_custom_model,
}

def ask_ai(question, model=None):
    model = model or settings.AI_DEFAULT_MODEL
    sales_data = load_sales_data()
    prompt = build_sales_prompt(question, sales_data)

    handler = MODEL_HANDLERS.get(model)
    if handler:
        return handler(prompt)
    return "Invalid model selected."
