//Simple Banking App using Function Expressions
// Bank account object
const bankAccount = {
  accountHolder: "John Doe",
  balance: 10000
};

// Deposit function expression
const deposit = function(amount) {
    if (amount <= 0) {
        console.log("Invalid deposit amount.");
        return;
    }
    bankAccount.balance += amount;
    console.log(`${bankAccount.accountHolder} deposited ${amount} $ `);
    console.log(`The updated balance is ${bankAccount.balance} $`);
}

// Withdraw function expression
const withdraw = function(amount) {
     if(amount>bankAccount.balance) {
        console.log(`Insufficient funds for ${bankAccount.accountHolder}`);
    } else{
        bankAccount.balance -= amount; 
        console.log(`${bankAccount.accountHolder} withdrew ${amount} $ `);
        console.log(`The updated balance is ${bankAccount.balance} $`);
    }
}

// Check balance function expression
const checkBalance = function() {
  console.log(`Current balance: ${bankAccount.balance} $`);
};


checkBalance();  // 10000 $
deposit(2000);  // 12000 $
console.log("-----------")
withdraw(1500);  // 10500 $