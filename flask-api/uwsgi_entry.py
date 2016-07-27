# this file is a python entry point for uWSGI
from app import app  # corresponds to main.py and 'app = Flask(__name__)' named 'app' within

if __name__ == "__main__":
    app.run()
