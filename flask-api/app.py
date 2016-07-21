from flask import Flask
from flask_pymongo import PyMongo
from flask_restful import Api, Resource
from users import user, users
from werkzeug.debug import DebuggedApplication
import netifaces

# get ip address
#netifaces.ifaddresses('eth0')
ip = netifaces.ifaddresses('eth0')[2][0]['addr']

print('\r\n * Python/Flask API listening on ' + ip + ':5000! * \r\n')

# configure flask app, rest api, and mongodb (pymongo)
app = Flask(__name__)
app.debug = True
app.wsgi_app = DebuggedApplication(app.wsgi_app, True)

api = Api(app)
mongo = PyMongo(app)

app.register_blueprint(user)  # register route from user.py
app.register_blueprint(users)  # register route from users.py


@app.route('/flask-api')
def user_fn():
    print(' * HELLO USER!!! * ')
    return "Hey single user!"


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

# The below doesn't work! You must run the app outside of the __name__ == '__main__' block
if __name__ == '__main__':
    print(' ')
    print(' * Local uWSGI running on :5000')
    print(' ')
    app.run()
