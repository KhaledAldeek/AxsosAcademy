from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "secret key"
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])
def checkout():
    session['strawberry'] = request.form['strawberry']
    session['raspberry'] = request.form['raspberry']
    session['apple'] = request.form['apple']
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['student_id'] = request.form['student_id']
    return redirect("/checkout")

@app.route('/fruits')
def fruits():
    return render_template("fruits.html")

@app.route('/checkout')
def checkout2():
    number_of_items = int(session['strawberry'])+int(session['raspberry'])+int(session['apple'])
    number_of_strawberry = int(session['strawberry'])
    number_of_raspberry = int(session['raspberry'])
    number_of_apple = int(session['apple'])
    return render_template("checkout.html", number_of_items=number_of_items, number_of_strawberry=number_of_strawberry,number_of_apple=number_of_apple,number_of_raspberry=number_of_raspberry,first_name=session['first_name'],last_name=session['last_name'],student_id=session['student_id'])

if __name__=="__main__":
    app.run(debug=True)