class BankAccount {

    constructor(accountNumber,ownerName, balance=0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    // deposit
    deposit(amount) { 
        if(amount>0) {
            this.balance += amount;
             console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.error("Deposit amount must be a positive number");
        }
    }

    // withdraw
    withdraw(amount) { 
        if(amount>0  && amount< this.balance) {
            this.balance -= amount;
             console.log(`Withdraw ${amount}. New balance: ${this.balance}`);
        } else {
            console.error("Insufficient funds for withdraw");
        }
    }

    // getBalance
    getBalance() {
        console.log("The account : "+ this.accountNumber + " has balance : "+this.balance);
    }
}


const bankAccount1 = new BankAccount("AC10203", "Alex Smith", 50000);
bankAccount1.getBalance();
bankAccount1.deposit(30000);
bankAccount1.getBalance();
bankAccount1.withdraw(20000);

console.log("------------------------");

const bankAccount2 = new BankAccount("AC10204", "John Smith", 10000);
bankAccount2.getBalance();