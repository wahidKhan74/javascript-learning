// In JavaScript, functions are first-class objects, which means:
// Properties
// Methods
// Behaviors like any object

function message(name){
    return 'Hello user '+name;
}

// Add a property to the function
message.language = "English";

console.log(message("John Smith"));  // Hello user John Smith
console.log(message.language);  // English
console.log(typeof message);  // function

console.log(message instanceof Function);  // true
console.log(message instanceof Object);    // true

