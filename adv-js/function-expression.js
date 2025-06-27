// function expression :
// 1. lableded function expression

// NOT hoisted: You can’t call it before the line where it's defined.
// showText();  // Uncaught ReferenceError: Cannot access 'showText' before initialization

let showText = function showMessage() {
    console.log("Today is a wonderfull day!");
}

// 2. anonymous function expression
let showData = function (greetings) {
    console.log(`Today is a ${greetings} day!`);
}

// showMessage();  // Error : showMessage is not defined
// call

// showText();

showData('Sunny');