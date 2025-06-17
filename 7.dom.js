// 1. Access elements by ID
let title = document.getElementById("main-title");
title.innerText = "Hello DOM World!";
title.style.color = "blue";
title.style.fontSize = "4em";
title.style.fontStyle = "italic";
// console.log(title);


// 2. Access by Class : returns a collection of elements
let paras = document.getElementsByClassName("info");
let para1 = paras[0];
let para2 = paras[1];

para1.innerText = "This is the first paragraph.";
para2.innerText = "This is the second paragraph.";

para1.style.color = "green";
para2.style.color = "red";

// console.log(para1);
// console.log(para2);

// 3. Access by Tag Name : returns a collection of elements
let items = document.getElementsByTagName("li");
for (let i = 0; i < items.length; i++) {
    items[i].style.color = "purple";
    items[i].style.fontSize = "1em";
    items[i].innerText += " - Updated!";
}

// 4. Access by Query Selector : returns the first matching element
let firstItem = document.querySelector(".info");
console.log(firstItem);
firstItem.style.backgroundColor = "lightyellow";
firstItem.style.padding = "10px";
firstItem.style.border = "2px solid orange";
firstItem.innerText += " - Selected by Query Selector!";

// 5. Access by Query Selector All : returns a collection of elements
let allItems = document.querySelectorAll("li");
allItems.forEach((item, index) => {
    item.style.backgroundColor = "lightblue";
    item.style.margin = "5px";
    item.style.padding = "10px";
    item.innerText += ` - Content ${index + 1}`;
});

