function updateClock() {
            var now = new Date();
            var second = now.getSeconds();
            var minute = now.getMinutes();
            var hour = now.getHours();

            var secondDeg = second * 6;
            var minuteDeg = minute * 6 + second * 0.1;
            var hourDeg = hour * 30 + minute * 0.5;

            document.getElementById("second").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
            document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
            document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
        }

        setInterval(updateClock, 1000);
        updateClock(); 

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

var flag = true;
function change1(el) {
    if (el && flag) {
        flag = false;
        el.style.backgroundColor = "#1d7b3bff";
        el.style.color = "rgb(255, 255, 255)";
    }else{
        flag = true;
        el.style.backgroundColor = "rgb(71 207 115)";
        el.style.color = "black";
    }
}