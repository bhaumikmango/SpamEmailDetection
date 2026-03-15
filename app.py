import os
import pickle
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load model ONCE at startup — not inside the route
with open('file.pkl', 'rb') as f:
    predictor = pickle.load(f)

@app.route("/", methods=['POST'])
def index():
    data = request.get_json()
    if not data or 'email' not in data:
        return jsonify({"error": "missing 'email' field"}), 400

    result = predictor.predict([data['email']])
    return jsonify({"isSpam": "true" if result[0] == 1 else "false"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)