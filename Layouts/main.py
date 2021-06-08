from flask import Flask, render_template, request
import os

app = Flask(__name__)


@app.route('/')
def index():

    return render_template('index.html')

@app.route('/gallery/')
def gallery():

    return render_template('gallery.html', dir = os.listdir, enumerate=enumerate)

@app.route('/coaches/')
def meetcoaches():

    return render_template('meetcoaches.html')

@app.route('/news/')
def news():

    return render_template('news.html',dir = os.listdir)

@app.route('/blog/')
def blog(content):

    return render_template('news.html',dir = os.listdir)

@app.route('/contact/')
def contact():

    return render_template('contact.html')

@app.errorhandler(404)
def page_not_found(e):

    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
