let switchBtn = document.getElementById("switch");
let blub = document.getElementById("blub");

switchBtn.addEventListener("click", function () {
    console.log("Button clicked!");
    if(blub.style.backgroundColor === "yellow") {
        blub.style.backgroundColor = "black";
        switchBtn.innerText = "Turn on the light";
    } else {
        blub.style.backgroundColor = "yellow";
        switchBtn.innerText = "Turn off the light";
    }
})
