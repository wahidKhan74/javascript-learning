//bind(), call(), and apply() are Function methods in JavaScript that allow you to control the value of this and how functions are executed.

//bind(): Returns a new function with fixed this

// object
const user = {
    name : "John snow",
    age : 20
}

// a function
function greet(greetings, pentn) {
    console.log(`${greetings} , ${this.name} ${pentn}`);
}

//bind()  Does not call immediatelyb
// Returns a new function you can call later
let syAfternoon = greet.bind(user, "Good Afternoon" , ".");
syAfternoon();


// call() :: Calls the function immediately
greet.call(user, "Good day", ".");

// apply() :: Same as call(), but arguments as an array

greet.apply(user, ["Good night", "!"]);

