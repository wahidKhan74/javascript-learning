//function decleration
//1. Non Parametrised function
function showMessage() {
    // logic 
    console.log("Today is a good day!");
}

// function calling
showMessage();

//2. Parametrised function
// Create a blender machine
function blender(fruit) {
    return "Here is your "+ fruit + " smoothie!";
}

let result1 = blender("Banana");
let result2 = blender("Apple");
console.log(result1);
console.log(result2);

// Multi parametrised function
/**
 *  Prepares a smoothie using given ingredients.
 * @param {*} fruit - The main fruit
 * @param {*} liquid - The main liquid base
 * @param {*} sweetner - The sweetner 
 */
function makeSmoothie(fruit, liquid, sweetner) {
    console.log( `Here is your ${fruit} smoothie with 
    ${liquid} and a tocuh of ${sweetner} !`);
}

// makeSmoothie();       //  Here is your undefined smoothie with undefined and a tocuh of undefined 
makeSmoothie("Banana", "Milk", "Honey");
makeSmoothie("Banana");

