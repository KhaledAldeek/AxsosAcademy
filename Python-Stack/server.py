from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/champions')
def champions():
    return 'Champions'

@app.route('/say/flask')
def say_flask():
    return 'Hi Flask!'

@app.route('/say/micheal')
def say_micheal():
    return 'Hi Micheal!'

@app.route('/say/john')
def say_john():
    return 'Hi John!'

@app.route('/repeat/35/hello')
def repeat_hello():
    str = ""
    for i in range(35):
        str += "hello "
    return str

@app.route('/repeat/80/bye')
def repeat_bye():
    str = ""
    for i in range(80):
        str += "bye "
    return str

@app.route('/repeat/99/dogs')
def repeat_dogs():
    str = ""
    for i in range(99):
        str += "dogs "
    return str

@app.route('/repeat/<int:x>/<str1>')
def repeat(x, str1):
    str = ""
    for i in range(x):
        str += str1+" "
    return str



if __name__ == '__main__':
    app.run(debug=True)
