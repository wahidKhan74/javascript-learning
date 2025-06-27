// function declaration 

//Function Hoisted: You can call it before it's defined in code.
showMessage();

function showMessage() {
    console.log("Fx : Today is a wonderfull day!");
}

function showData(greetings) {
    console.log(`Today is a ${greetings} day!`);
}




showData("sunny");