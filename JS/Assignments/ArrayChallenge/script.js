// Always Hungry
function alwaysHungry(arr) {
    var full = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            full = true;
            console.log("yummy");
        }
    }
    if (!full) {
        console.log("I'm hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

// High Pass Filter 
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// Better than anverage 
function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length;

    var count = 0;
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > average) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

// Array Reverse 
function reverse(arr) {
    var arr1 = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        arr1 = arr.reverse();
        arr = arr1;

    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

// Fibonacci Array 
function fibonacciArray(n) {
    var fibArr = [0, 1];

    for (var i = 2; i < n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];

    }
    return count
    return fibArr;
}

var result = fibonacciArray(6);
console.log(result);