// An IIFE is a function that runs immediately after it's defined -- no need to call the function
// syntax :
(function(){
    //logic
})();

// Used to initialize data, run setup code, or create private scope.

(function() {
    //code intialization
    console.log("Bank system initialized at : "+ new Date().toLocaleString());
})();


// Private Interest Rate Calculation
const interest = (function() {
    const rate = 5; // private value
    return function(principal, years) {
        return (principal * rate * years) / 100;
    }
})();

// The rate is hidden from the outer scope — secure for banking formulas.
console.log(interest(10000, 5));


// Generate Unique Account ID (Self-contained)
const accountId = (function() {
    const prefix = "BANK"; // private value
    const randomNo = Math.floor(Math.random() * 100000);
    return prefix+randomNo;
})();

console.log("Generated Account ID:", accountId);