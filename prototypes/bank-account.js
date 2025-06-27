function BankAccount (accountName , balance) {
    this.accountName = accountName;
    this.balance = balance;
}

// Shared method using prototype
BankAccount.prototype.deposit = function(amount) {
    this.balance = this.balance + amount; // this.balance += amount;
    console.log(`${this.accountName} deposited ${amount} $ `);
     console.log(`The updated balance is ${this.balance} $`);
}

BankAccount.prototype.withdraw = function(amount) {
    if(amount>this.balance) {
        console.log(`Insufficient funds for ${this.accountName}`);
    } else{
        this.balance = this.balance - amount; // this.balance -= amount;
        console.log(`${this.accountName} withdrew ${amount} $ `);
        console.log(`The updated balance is ${this.balance} $`);
    }
}

const steven = new BankAccount("Steven", 50000);
console.log(steven);
steven.deposit(10000);

console.log("---------");

const alex = new BankAccount("Alex", 20000);
console.log(alex);
alex.withdraw(10000);