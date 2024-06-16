from flask import Flask, request, jsonify
from flask_cors import CORS
from src.main import llm_prompt
from src.response_parser import parse_response


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/api/search', methods=['POST'])
def search():
    data = request.get_json()
    response: dict = None
    if "additional" in data.keys():
        additional = data["additional"]
        data.pop("additional")
        response = llm_prompt(data, additional)
    else:
        response = llm_prompt(data)

    return jsonify(parse_response(response))
