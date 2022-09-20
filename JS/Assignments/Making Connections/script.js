var changeName = document.querySelector("#jane")

function change() {
    changeName.innerText = "New name";
}




function remove(element) {
    var removeUser = document.querySelector(element);
    var decrease = document.querySelector('.number');
    decrease.innerText = parseInt(decrease.innerText)-1;
    console.log(removeUser)
    removeUser.remove();
}



function add(element) {
    var increase = document.querySelector('.number2');
    increase.innerText = parseInt(increase.innerText)+1 + '+';
    var removeUser = document.querySelector(element);
    var decrease = document.querySelector('.number');
    decrease.innerText = parseInt(decrease.innerText)-1;
    removeUser.remove();
}

