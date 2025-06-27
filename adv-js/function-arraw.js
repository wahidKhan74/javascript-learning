// Arrow Functions (ES6)
// An arrow function is a shorter syntax for writing functions in JavaScript.
let showText =  () => {
    console.log("Today is a wonderfull day!");
}

let showData = (greetings) => {
    console.log(`Today is a ${greetings} day!`);
}

showText();

showData('Sunny');


// Traditional 
// function add(num1, num2) {
//     return num1 +  num2;
// }

let add = (num1, num2) =>  num1 + num2;

console.log(add(1000, 3000));

const calculateInterest  = (principal, rate, time) =>  (principal* rate* time)/100;
console.log("Interest : " , calculateInterest(10000, 5 ,1));

