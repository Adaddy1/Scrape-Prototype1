# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests
from summarizer import Summarizer

app = Flask(__name__)
CORS(app, origins="*")

@app.route('/')
def home():
    return 'Hello, this is the backend of Project Evelyn!'

@app.route('/scrape', methods=['POST'])
def scrape():
    try:
        url = request.json['url']
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')

        # Perform web scraping using Beautiful Soup here
        # Extract the data you need from the HTML
        # For example, let's extract all the text inside <p> tags
        paragraphs = [p.text for p in soup.find_all('p')]

        return jsonify({'result': '\n'.join(paragraphs)})
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/summary', methods=['POST'])
def summary():
    try:
        url = request.json['url']

        # Fetch the HTML content of the page
        response = requests.get(url)
        html_content = response.text

        # Use BERT extractive summarizer
        summarizer = Summarizer()
        summary_text = summarizer(html_content)

        return jsonify({'summary': summary_text, 'result': 'Actual Result'})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
