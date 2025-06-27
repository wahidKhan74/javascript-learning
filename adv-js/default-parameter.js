//In JavaScript, you can assign default values to function parameters so that if no value is passed, the default will be used.

function showMessage(message="Hello") {
    console.log(message);
}

showMessage();   // Hello
showMessage("Hello Customer!"); // Hello Customer!


// Create bank account
function createAccount(name, balance=5000, type="Saving"){
     console.log(`${name} opened a ${type} account and balance ${balance}.`);
}

createAccount("Alex");
createAccount("Miller", 40000, "Credit");