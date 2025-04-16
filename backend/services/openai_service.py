import openai
from config.settings import settings
from openai import OpenAIError

client = openai.OpenAI() 

def ask_openai(prompt: str) -> str:
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        return response.choices[0].message.content
    except openai.AuthenticationError:
        return "Server authentication failed. (Use other AI model)"
    except openai.RateLimitError:
        return "Rate limit exceeded: Please try again later. (Use other AI model)"
    except openai.APIConnectionError:
        return "API network connection error."
    except openai.OpenAIError as e:
        return f"OpenAI error: {str(e)}"
    except Exception as e:
        return f"Unexpected error: {str(e)}"