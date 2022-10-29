// var numbers = [2,4,6,8,10]
// for (var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


// function hello(name,day) {
//     console.log(`Hello ${name} Happy ${day}!`);
// }
// hello('Branley', 'Friday');


// function logAllNums() {
//     var array = []
//     for (var i = 1; i <= 255; i++) {
//         array.push(i);
//     }
//     return array
// }
// var numArray = logAllNums();
// console.log(numArray);

// var employee = {
//     name: "Branley",
//     role: "Student",
//     age: 26,
//     favHobbies: ["coding", "watching anime","listeing to music"]
// }
// console.log(employee.name);
// console.log(employee.favHobbies[0]);

// var arr = [2,4,6,8,-2,-5,4,9,-60]
// function positiveNegative() {
//     var positive = [];
//     var negative = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             negative.push(arr[i]);
//         }
//     }
//     console.log(negative);
// }
// positiveNegative();

// var arr = [2,34,4,90,-1,20,5];
// function highNum(arr) {
//     var max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     } 
//     return max;
// }
// console.log(highNum(arr))

// jQuery

// $(document).ready(function(){
//     // let h1 = document.querySelector("h1");
//     // h1.addEventListener('click', myFunction);
//     // function myFunction() {
//     //     h1.innerText = "I love web fund"
//     // }
//     $('h1').click(function(){
//         this.innerText = "I love web fund";
//     })
// }) 

// let romanToInt = function(s) {
//     let I = 1
//     I = String(I)

//     let M = 50
//     M = String(M)

//     let arr = s.split('')
//     let initial = 0
//     let intTotal = arr.reduce((a,b) => {
//         return a + roman[b]
//         , initial
//     })
//     return intTotal
// }    

//     const roman = {
//     "I" : 1,
//     "V" : 5
// }
// roman["v"]

// console.log(romanToInt('III'))

// function threesFives(num){
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             continue;
//         }
//         count += i
//     }
//     return count;


// }

// console.log(threesFives(10))


// function sumToOne(num) {
    
//     sum  = num % 9 || 9;

//     console.log(sum)
// }

// sumToOne(35798);