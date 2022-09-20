// Print odds 1-20
for (var i = 1; i <=20; i+=2) {
    console.log(i);
}

// Decreasing Multiples of 3
for (var i = 100; i >= 0; i --) {
    if (i % 3 == false) {
        console.log(i);
    }
}

// Print the Sequence
var array = [4,2.5,1,-0.5,-2,-3.5];
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Sigma 
var x = 0;
for (var i = 0; i <=100; i ++) {
    console.log(i);
    var sum = x+=i;
}
console.log(sum);

// Factorial
var x = 1;
for (var i = 1; i <=12; i++) {
    
    console.log(i);
    var product = x*=i;
}
console.log(product);