let ninjaSquad = ['Naruto', 'Sasuke', 'Sakura', 'Kakashi']; // Array of strings
console.log(ninjaSquad); // Output: ['Naruto', 'Sasuke', 'Sakura', 'Kakashi']
console.log(ninjaSquad[0]); // Accessing the first element: 'Naruto'
console.log(ninjaSquad[ninjaSquad.length - 1]); // Accessing the last element: 'Kakashi'
console.log(ninjaSquad.length); // Getting the length of the array: 4

// Looping through the array :=> // iterate over values and index
for (let i=0; i<ninjaSquad.length; i++) {
    console.log(`Ninja ${i} : ${ninjaSquad[i]}`);
}

console.log('----------------------------------');

// Looping through the array using forEach  :> // iterate over values and index
ninjaSquad.forEach(function(ninja, index){
    console.log(`Ninja ${index} : ${ninja}`);
});

console.log('----------------------------------');

// Looping through the array using for...of :=> // iterate over values
for( let ninja of ninjaSquad) {
    console.log(` Ready for battle! - ${ninja}`);
}

console.log('----------------------------------');
// Looping through the array using for...in :=> // iterate over index
for( let index in ninjaSquad) {
    console.log(` Ninja at index ${index} : ${ninjaSquad[index]}`);
}