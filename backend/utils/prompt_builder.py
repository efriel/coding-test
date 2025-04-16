import json

def build_sales_prompt(question: str, sales_data: dict) -> str:
    """
    Build a prompt for analyzing sales data with an AI assistant.
    """
    context = json.dumps(sales_data, indent=2)
    return f"""You are an assistant analyzing a sales team data.

SALES DATA:
{context}

QUESTION:
{question}

Please provide a clear, helpful response based on the data above.
"""
