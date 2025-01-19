import pickle
from flask import Flask,jsonify,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route("/", methods=['POST'])
def index():

    if(request.method=='POST'):
        data = request.get_json()
        with open('file.pkl', 'rb') as f:
            predictor = pickle.load(f)

        input_text = data['email']
        res = predictor.predict([input_text])
        data = {
            "isSpam": "null",
            }
        if res[0] == 1:
            data = {
            "isSpam": "true",
            }
        else:
            data = {
            "isSpam": "false",
            }
        return jsonify(data)

if (__name__=="__main__"):
    app.run(debug=False)