// Vaslidate email format : return true if valid, false otherwise
function isValidEmail(email) {
    // Remove leading and trailing spaces
    let cleanedEmail = email.trim();
    if (cleanedEmail.length === 0) {
        return false; // Empty email is invalid
    } 
    if (
        !cleanedEmail.includes("@") || 
        !cleanedEmail.includes(".") || 
        !cleanedEmail.endsWith(".com")
    ) {
        return false; // Basic format check
    }
    return true; // Email is valid
}

// Email Validator 
let email = "   user@example.com   ";
// Check if the email is valid
console.log("Is the email valid?", isValidEmail(email)); // true
console.log("Is the email valid?", isValidEmail("user@domain")); // true


// Phone Number Validator
let phoneNumber = "123-456-7890";

// Validate phone number format: return true if valid, false otherwise
// 10 digits phone number with optional dashes
// should start with a digit and can contain dashes
// should not contain any other characters
// should not be empty