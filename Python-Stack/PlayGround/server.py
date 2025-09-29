from flask import Flask, render_template

app = Flask(__name__)                     
    
@app.route('/play')                           
def play():
    return render_template('index.html')  

@app.route('/play/<int:x>')
def playXtimes(x):
    return render_template('index2.html', num = x)
    

@app.route('/play/<int:x>/<color>')
def playXtimesWithColor(x,color):
    return render_template('index3.html', num = x, COLOR = color)

if __name__=="__main__":
    app.run(debug=True)                  



