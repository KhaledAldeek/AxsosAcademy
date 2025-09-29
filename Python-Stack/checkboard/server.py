from flask import Flask, render_template

app = Flask('__name__')

@app.route('/')
def default():
    return render_template('index.html')

@app.route('/<int:x>')
def eight_by_num(x):
    return render_template('index2.html', num = x)

@app.route('/<int:x>/<int:y>')
def  num_by_num(x,y):
    return render_template('index3.html', num1 = x, num2 = y)

if __name__ == '__main__':
    app.run(debug=False)