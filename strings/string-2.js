// String Properties
// String Length
let str = "Hello, javascript learning!";
console.log("String Length:", str.length); // 27

// String Indexing
console.log("First Character:", str[0]); // H
console.log("Last Character:", str[str.length - 1]); // !


let tweet = "Learning JavaScript is fun! #JavaScript #Coding";
if(tweet.length>280) {
    console.log("Tweet is too long! Please shorten it.");
} else {
    console.log(`Tweet is within the limit. ${tweet.length} characters.`);
}

// password length validation.
// less then 8 characters is invalid or too short password

// Search Functionality
let searchQuery ="";
if(searchQuery.length === 0) {
    console.log("Search query is empty. Please enter a search term.");
} else {
    // Simulate a search operation or logic
    console.log(`Searching for: ${searchQuery}`);
}


// String with new Keyword
let newString = new String("This is a string created with the new keyword.");
console.log(newString); // [String: 'This is a string created with the new keyword.']