from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/api/search', methods=['POST'])
def search():
    data = request.get_json()
    prompt = "Show me cars that satisfy the following criteria: "

    for key, value in data.items():
        if key != "additional":
            prompt += f"{key} is {value}, "
        else:
            prompt += f" with additional requirements being: {value}"

    # process the data for the model

    return ...
