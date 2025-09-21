
function change1(el) {
    var style = el.computedStyleMap().get('color').toString();
    if (style == "rgb(0, 0, 0)") {
        el.style.backgroundColor = "#1d7b3bff";
        el.style.color = "rgb(255, 255, 255)";
    }
}

function change2(el) {
    var style = el.computedStyleMap().get('color').toString();
    if (style == "rgb(255, 255, 255)") {
        el.style.backgroundColor = "rgb(71 207 115)";
        el.style.color = "black";
    }
}

function change3(el) {
    var style = el.computedStyleMap().get('background-color').toString();
    if (style == "rgb(68, 72, 87)") {
        el.style.backgroundColor = "rgba(92, 92, 94, 1)";
    }
}

function change4(el) {
    var style = el.computedStyleMap().get('background-color').toString();
    if (style == "rgb(92, 92, 94)") {
        el.style.backgroundColor = "rgb(68, 72, 87)";
    }
}

function press(val) {
    document.getElementById("display").value += val;
}

function setOP(op) {
    document.getElementById("display").value += op;
}

function calculate() {
    let input = document.getElementById("display");
    try {
        input.value = eval(input.value); //this is a built in function in js. I searched about it and it can evaluate any exprssion come to it  
    } catch {
        input.value = "Error";
    }
}

function clr() {
    document.getElementById("display").value = "";
}

function hoverOut(btn) {
    btn.style.backgroundColor = "";
    btn.style.color = "white";
}

function hoverIn(btn) {
    btn.style.backgroundColor = "rgb(68, 72, 87)";
    btn.style.color = "white";
}