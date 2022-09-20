


function increase(num) {
    console.log(num)
    var addElement = document.querySelector(num);
    console.log(addElement);
    var innerText = parseInt(addElement.innerText);
    addElement.innerText = innerText+1;
    console.log(addElement.innerText);
}

