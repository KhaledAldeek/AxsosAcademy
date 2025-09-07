function alertHere(element){
    alert(element.innerText + " city was clicked");
}

function dismissCookie(){
    var x = document.querySelector(".last");
    x.remove();
}

function change(element){
    if(element.options[element.selectedIndex].innerText == "°C"){
        changeToC();
    }else{
        changeToF();
    }
}

function changeToC(){
    var arr = document.querySelectorAll(".degree");
    for(var i = 0 ; i < arr.length ; i++){
        var fahrenheit = parseFloat(arr[i].innerText);
        var celsius = (fahrenheit - 32) * 5/9;
        arr[i].innerText = celsius.toFixed(1) + "°";
    }
}

function changeToF(){
    var arr = document.querySelectorAll(".degree");
    for(var i = 0 ; i < arr.length ; i++){
        var celsius = parseFloat(arr[i].innerText);
        var fahrenheit = celsius * 9/5 + 32;
        arr[i].innerText = fahrenheit.toFixed(1) + "°";
    }
}
