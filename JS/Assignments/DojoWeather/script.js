
function remove(element) {
    var message = document.querySelector("footer")
    message.remove();
}

function convert(element) {
for(var i = 1; i < 9; i++) {
    var temp = document.querySelector("#val" +i);
    var tempChange = parseInt(temp.innerText);
    function fahrenheit() {
        return Math.round(tempChange * 1.8 + 32);
    }
    function celsius() {
        return Math.round((tempChange - 32) / 1.8);
    }
    if (element.value == "°C") {
        temp.innerText = celsius();
    } else {
        temp.innerText = fahrenheit(tempChange);
    }
    
}
}
    

