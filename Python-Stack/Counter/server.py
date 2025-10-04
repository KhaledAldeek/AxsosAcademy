from flask import Flask, render_template, session, redirect

app = Flask(__name__)
app.secret_key = "second secret key"

@app.route('/')
def index():
    if "counter" not in session:
        session["counter"] = 0
    session["counter"] += 1
    return render_template('index.html', times=session['counter'])

@app.route('/destroy_session')
def destroy_session():
    session.clear()
    return redirect("/")

if __name__ == '__main__':
    app.run(debug=True)
