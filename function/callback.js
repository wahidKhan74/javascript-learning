// A callback function is :-
// 1. a function passed as an argument to another function.
// 2. Then callaback function is executed inside antoher function.


function xFunction(callback) {
    console.log("-- Calling function X --");

    //To control the order of execution (especially for asynchronous tasks).
    callback();
}

// declaring a yfuction
function yFunction() {
    console.log("-- Calling function Y --");
}

xFunction(yFunction);



// Real-World: Set Timeout
//  after 2 seconds.
setTimeout(function(){
    console.log('This logic runs after 2 second delay');
}, 2000);

// Array Methods using Callbacks
let numbers = [1,2,3,4,5,6];
numbers.forEach(function(number) {
    console.log(number*2); // Double each number
});
