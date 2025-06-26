
/**
 * The Calculator function.
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} callback 
 * @returns 
 */
function calculator(num1 , num2, callback) {
    return callback(num1, num2)
}

/**
 * The addition fucntion.
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function add(num1 , num2) {
    return num1 + num2;
}

/**
 * The substraction function
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function sub(num1 , num2) {
    return num1 - num2;
}

/**
 * The multiplication function
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function mul(num1 , num2) {
    return num1 * num2;
}

/**
 * The division function
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function div(num1 , num2) {
    return num1 / num2;
}

/**
 * The average function
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function avg (num1, num2){
    return (num1+num2)/2;
}

let x = 100;
let y = 400;

let result1 = calculator(x, y, add);
console.log(`The Additon of ${x} + ${y} = ${result1}`);

let result2 = calculator(x, y, sub);
console.log(`The Substraction of ${x} - ${y} = ${result2}`);

let result3 = calculator(x, y, mul);
console.log(`The Multiplication of ${x} * ${y} = ${result3}`);

let result4 = calculator(x, y, div);
console.log(`The Division of ${x} / ${y} = ${result4}`);

let result5 = calculator(x, y, avg);
console.log(`The Average of ${x} and ${y} = ${result5}`);
