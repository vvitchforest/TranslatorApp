from flask import Flask, render_template, request, jsonify
from transformers import pipeline

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/submit-form', methods=['POST'])
def submit_form():

    data = request.json

    en_fi_translator = pipeline(
        "translation", model="Helsinki-NLP/opus-mt-en-fi")

    translated_text = en_fi_translator(data)

    translation = translated_text[0]["translation_text"]

    print(f'data: {translation}')

    return jsonify(translation)
