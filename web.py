from flask import Flask, render_template, request
import json

app = Flask(__name__)


@app.route('/submit', methods=['POST'])
def email():
    if request.method == 'POST':
        data = json.loads(request.get_data(as_text=True))
        print(data)
        status = True
        return {"status": status}


@app.route("/")
def index():
    return render_template('index.html')
