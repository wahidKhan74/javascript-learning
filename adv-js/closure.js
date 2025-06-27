// A closure happens when a function "remembers" variables from its outer scope, 
// even after that outer function has finished executing.

// global varaible
let lastName = "Miller";

// outer function
function fullName() {
    // outer varaible
    let middleName = "Kim";

    // inner function  : closure function
    return function combine() {
        // inner varaible
        let firstName = "John";
        return `${firstName} ${middleName} ${lastName}`;
    }
}

let innerFunction = fullName();
let result = innerFunction();
console.log(result);


// Loan Interest Calculator
function loaCalculator(rate) {
    // closure
    return function(principal) {
        return (principal*rate)/100;
    }
}

let homeLoanInterest = loaCalculator(6.5); // closure remembers rate = 6.5%
console.log("Interest on home loan : " , homeLoanInterest(5000000));
