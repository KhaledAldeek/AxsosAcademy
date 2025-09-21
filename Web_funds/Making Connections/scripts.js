function removeAndIncrease(element){
    element.parentElement.parentElement.remove();
    var x = document.getElementById("two");
    x.innerText = Number(x.innerText) - 1;
    var y = document.getElementById("FIVEHUNDRED");
    y.innerText = Number(y.innerText) + 1;
}

function removeAndDecrease(element){
    element.parentElement.parentElement.remove();
    var x = document.getElementById("two");
    x.innerText = Number(x.innerText) - 1;
}

function changeName(){
    var x = document.getElementById("jone-name");
    x.innerText = "Khaled"
}
