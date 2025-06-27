// A Map is a built-in object that stores key-value pairs where:
// Keys can be of any type (not just strings like in objects)
// It maintains the insertion order
// Offers better performance for frequent add/delete operations

const accountMap = new Map();

// add values 
accountMap.set("ACC0001", { name : "Alex", balance:80000 });
accountMap.set("ACC0002", { name : "David", balance:21000 });
accountMap.set("ACC0003", { name : "Steven", balance:78890 });
accountMap.set("ACC0004", { name : "Miller", balance:234568 });

// Retrieve account
console.log(accountMap.get("ACC0001"));


// update account
let account = accountMap.get("ACC0001");
account.balance += 30000;
accountMap.set("ACC0001", account);

console.log(accountMap.get("ACC0001"));

// Loop Through all account
for(const [accNo, details] of accountMap) {
    console.log(`${accNo} => ${details.name} has ${details.balance}`);
}

// Check Account Exists
console.log(accountMap.has("ACC0001")); // true

// Delete an Account
accountMap.delete("ACC0001");
console.log("After deletion : ", accountMap.has("ACC0001")); // false
