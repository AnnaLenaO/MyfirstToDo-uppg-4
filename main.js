// Fetch completed, input, button, message & list
const completed = document.querySelector("#allComplete")
const input = document.querySelector("#inputToDo");
const button = document.querySelector("#saveBtn");
const message = document.querySelector("#userMessage");
const list = document.querySelector("ul");

// Declare the variable countComplete
let countComplete = 0;

// Add an EventListener to the button
button.addEventListener("click", function () {

    // Declare the variable text with value from input
    const text = input.value;

    // Only text written from input can be added to the list
    if (text.length == 0) {
        message.innerText = "Write your task in the box";
        return;
    }
    else {
        message.innerText = "";
    }

    // Create a new li element & add it to the list
    const toDo = document.createElement("li");
    list.appendChild(toDo);

    // Create a new span element in the new li element
    const toDoLabel = document.createElement("span");

    // Make the toDo visible in the list by adding it to the new span element
    toDoLabel.innerText = text;
    toDo.appendChild(toDoLabel);

    // Add a listener to the span & uppdate countComplete
    toDoLabel.addEventListener("click", function () {

        // Alternate between completed & not completed toDo
        if (toDo.getAttribute("class") == "markComplete") {

            // Unmark the toDo as completed & decrease countComplete
            toDo.setAttribute("class", "");
            countComplete--;
        }
        else {
            // Mark the toDo as completed & increase countComplete
            toDo.setAttribute("class", "markComplete");
            countComplete++;
        }

        // Create visible text for number of completed toDo by using a string template
        completed.innerText = `${countComplete} completed`;
    })

    // Empty input from user after the toDo has been added to the list
    input.value = "";
})