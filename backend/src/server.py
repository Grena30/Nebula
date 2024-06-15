from flask import Flask, request, jsonify


class Server:
    def __init__(self):
        self.app = Flask(__name__)

        self.app.add_url_rule('/', 'index', self.index, methods=['GET'])

        self.app.run(host='0.0.0.0', port=5000)


    def index(self):
        return jsonify({'message': 'Hello World!'})
