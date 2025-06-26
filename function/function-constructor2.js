// Robot Constructor
function Robot(name, type) {
    // properties
    this.name = name;
    this.type = type;

    this.introduce = function() {
        console.log(`I am ${this.name}, a ${this.type} robot !`)
    }
}


const robot1 = new Robot("Optimus", "Fighting");

robot1.introduce();

const robot2 = new Robot("Chatgpt", "Gen AI");
robot2.introduce();


// WAP for a Coffee Order Constructor and add serve function
// Output : Hi ${customerName} , ${size} size ${type} is ready!
function CoffeeOrder(customerName, size, type) {}

// WAP for a Pizza Builder Constructor