import json

DATA_FILE = "data/dummyData.json"

def load_sales_data():
    with open(DATA_FILE, "r") as file:
        return json.load(file)