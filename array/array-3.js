// Write an example of using the `Array` in JavaScript to create burger.
let burger = [];

// Adding ingredients to the burger
burger.push("Botton Bun");
burger.push("Lettuce");
burger.push("Tomato");
burger.push("Cheese");
burger.push("Patty");
burger.push("Top Bun");

// Removing the tomato from the burger
burger.splice(2, 1); // Removes the ingredient at index 2 (Tomato)

// Replacing the cheese with bacon
burger.splice(2, 1, "Bacon"); // Replaces the ingredient at index 2 (Cheese) with Bacon

// Remving the bottom bun
burger.shift(); // Removes the first element (Bottom Bun)
// Removing the top bun
burger.pop(); // Removes the last element (Top Bun)

// Adding a new ingredient at the start
burger.unshift("Botton Bun"); // Adds Avocado at the start of the burger

// Adding a new ingredient at the end
burger.push("Top Bun"); // Adds Top Bun at the end of the burger

// Reversing the order of the burger ingredients
burger.reverse(); // Reverses the order of the ingredients in the burger

// Displaying the final burger
console.log("Burger :", burger);


