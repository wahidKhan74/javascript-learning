// String Regular Expression
function isValidEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// ^	Start of string
// [^\s@]+	1 or more characters that are not a space (\s) or @
// @	Literal @ symbol
// $	End of string
let email1 = "test@example.com";
let email2 = "wrong@email";
let email3 = " test@.com ";
let email4 = "test12@example.com";
console.log("Is valid email ? ", isValidEmail(email1));
console.log("Is valid email ? ", isValidEmail(email2));
console.log("Is valid email ? ", isValidEmail(email3));
console.log("Is valid email ? ", isValidEmail(email4));

// Example : Password validation

// Character Classes
// Pattern	Matches
// .	Any character except newline
// \w	Word character: [a-zA-Z0-9_]
// \W	Not a word character
// \d	Digit: [0-9]
// \D	Not a digit
// \s	Whitespace (space, tab, newline)
// \S	Not whitespace
// [abc]	a, b, or c
// [^abc]	Not a, b, or c
// [a-z]	Lowercase a to z
// [A-Z]	Uppercase A to Z
// [0-9]	Digits 0–9