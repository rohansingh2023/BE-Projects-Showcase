import pandas as pd


def excel_to_json(excel_file, json_file):
    # Read Excel file into pandas DataFrame
    df = pd.read_excel(excel_file)

    # Convert DataFrame to JSON
    df.to_json(json_file, orient="records", indent=4)


# Example usage
excel_file = "test_2.xlsx"
json_file = "../client/src/data/output.json"
excel_to_json(excel_file, json_file)
