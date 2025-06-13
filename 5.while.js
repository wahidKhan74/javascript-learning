// The while loop runs as long as a condition is true.
let milkContainer = 3; 

while(milkContainer>0) {
    console.log("The cat drinks milk");
    console.log("Container left : ", milkContainer);
    --milkContainer;
}
console.log("The cat is out of milk.");

// A do...while loop runs the code at least once, even if the condition is false. 
let pages =1;
do {
    console.log("Reading page .. "+ pages);
    pages++;
} while(pages>3)
console.log("Student fell asleep.");