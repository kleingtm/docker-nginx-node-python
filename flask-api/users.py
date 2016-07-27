from flask import Blueprint
user = Blueprint('user', __name__)
users = Blueprint('users', __name__)


@user.route('/flask-api/user')
def user_fn():
    print(' * HELLO USER from users.py !!! * ')
    return "Hey FLASK single user!"


@users.route('/flask-api/users')
def users_fn():
    print(' * HELLO MULTIPLE USERS from users.py !!! * ')
    return "Hey FLASK multiple users!"
