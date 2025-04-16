"""
Data Loader Module

This module is responsible for loading and processing data for the application. 
It provides utility functions to read data from JSON files and return it in a structured format.

Purpose:
- To centralize data-loading logic for easy reuse across the application.
- To ensure that data is loaded consistently and efficiently.

Dependencies:
- The `json` library is used to parse JSON files.

Functions:
- load_sales_data: Reads sales data from a JSON file and returns it as a Python dictionary.
"""

import json

DATA_FILE = "data/dummyData.json"

def load_sales_data():
    """
    Reads sales data from the specified JSON file and returns it as a Python dictionary.

    Returns:
    - dict: The sales data loaded from the JSON file.

    Raises:
    - FileNotFoundError: If the specified data file does not exist.
    - json.JSONDecodeError: If the JSON file is not properly formatted.

    Example Usage:
    >>> sales_data = load_sales_data()
    >>> print(sales_data)
    """
    with open(DATA_FILE, "r") as file:
        return json.load(file)