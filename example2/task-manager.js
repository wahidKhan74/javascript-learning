let taskInput = document.getElementById("task-input");
let addTaskBtn = document.getElementById("add-task");
let taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("event", function(event) {
    //logic
})

addTaskBtn.addEventListener("click", (event) => {
    let taskText = taskInput.value.trim();
    console.log("Button clicked ", taskText);

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // create a new list item
    let listItem = document.createElement("li");
    listItem.textContent = taskText;

    taskList.appendChild(listItem);

    // Add a delete button to the list item
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";
    deleteBtn.style.marginLeft = "10px";
    // Append the delete button to the list item
    listItem.appendChild(deleteBtn);

    // Add event listener to the delete button
    deleteBtn.addEventListener("click", (e) => { 
        taskList.removeChild(listItem);

         // stop event propagation
        event.stopPropagation();
        event.preventDefault();
   });

    // stop event propagation
    event.stopPropagation();
    event.preventDefault();
});