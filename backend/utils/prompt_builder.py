"""
Prompt Builder Module

This module is responsible for constructing prompts for AI models. 
It provides utility functions to format data and questions into structured prompts 
that can be sent to AI services for processing.

Purpose:
- To centralize prompt-building logic for consistency across the application.
- To ensure that prompts are formatted in a way that maximizes the effectiveness of AI responses.

Dependencies:
- The `json` library is used to serialize sales data into a readable format.

Functions:
- build_sales_prompt: Constructs a prompt for analyzing sales data with an AI assistant.
"""

import json

def build_sales_prompt(question: str, sales_data: dict) -> str:
    """
    Constructs a prompt for analyzing sales data with an AI assistant.

    Parameters:
    - question (str): The question to be answered by the AI assistant.
    - sales_data (dict): A dictionary containing sales data to be analyzed.

    Returns:
    - str: A formatted prompt string that includes the sales data and the question.

    Example Usage:
    >>> sales_data = {"team": [{"name": "Alice", "sales": 1000}, {"name": "Bob", "sales": 1500}]}
    >>> question = "Who has the highest sales?"
    >>> prompt = build_sales_prompt(question, sales_data)
    >>> print(prompt)
    """
    context = json.dumps(sales_data, indent=2)
    return f"""You are an assistant analyzing a sales team data.

SALES DATA:
{context}

QUESTION:
{question}

Please provide a clear, helpful response based on the data above.
"""
