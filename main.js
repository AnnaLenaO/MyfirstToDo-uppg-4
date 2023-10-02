// Fetch completed, input, button, message & list
const completed = document.querySelector("#allComplete")
const input = document.querySelector("#inputToDo");
const button = document.querySelector("#saveBtn");
const message = document.querySelector("#userMessage");
const list = document.querySelector("ul");

// Declare variables countComplete, toDoArray & extraToDoArray
let countComplete = 0;
const toDoArray = [];
const extraToDoArray = [];

// Handle status for a toDo in toDoArray
// Parameter toDoText & completedToDo (bool)
function changeStatusToDo(toDoText, completedToDo) {

    // Find index by looking at object & value name in toDoArray by using method map
    let correctIndex = toDoArray.map(t => t.name).indexOf(toDoText);

    // Change status for a toDo in toDoArray at correct index
    toDoArray[correctIndex].status = completedToDo;
}

// Add EventListener to the button
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

    // Add todo from user to toDoArray (create a new object & add it to the toDoArray)
    const toDoToArray = { name: text, status: false };
    toDoArray.push(toDoToArray);

    // Add todo text from user to extraToDoArray
    extraToDoArray.push(text);

    // Create a li element & add it to the list
    const toDo = document.createElement("li");
    list.appendChild(toDo);

    // Create a span element in the li element
    const toDoLabel = document.createElement("span");

    // Add text to the span element & adding it to the li element
    toDoLabel.innerText = text;
    toDo.appendChild(toDoLabel);

    // Create a new span element (trashcan) in the li element
    const trashcan = document.createElement("span");

    // Add traschcan symbol to the new span element & adding it to the li element
    trashcan.innerHTML = " &#128465;";
    trashcan.setAttribute("class", "deletetoDo");
    toDo.appendChild(trashcan);

    // Add EventLlistener to the span & uppdate countComplete
    toDoLabel.addEventListener("click", function () {

        // Alternate between completed & not completed toDo
        if (toDo.getAttribute("class") == "markComplete") {

            // Unmark the toDo as completed & decrease countComplete
            toDo.setAttribute("class", "");

            // Change status for a toDo in toDoArray to false
            let clickedToDo = toDo.firstChild.firstChild.textContent;
            changeStatusToDo(clickedToDo, false);

            countComplete--;
        }
        else {
            // Mark the toDo as completed & increase countComplete
            toDo.setAttribute("class", "markComplete");

            // Change status for a toDo in toDoArray to true
            let clickedToDo = toDo.firstChild.firstChild.textContent;
            changeStatusToDo(clickedToDo, true);

            countComplete++;
        }

        // Create visible text for number of completed toDo by using a string template
        completed.innerText = `${countComplete} completed`;
    })

    // Add EventListener to the trashcan for deleting a toDo
    trashcan.addEventListener("click", function () {

        // Uppdate countComplete
        if (toDo.getAttribute("class") == "markComplete") {
            countComplete--
        }

        completed.innerText = `${countComplete} completed`;

        // Uppdate extraToDoArray
        //  Declare the span to declare the index so that text can be removed from extraToDoArray
        let removeText = toDo.firstChild.firstChild.textContent;
        let removeIndex = extraToDoArray.indexOf(removeText);
        extraToDoArray.splice(removeIndex, 1);

        // Remove toDo
        toDo.remove();
    })

    // Empty input from user after the toDo has been added to the list
    input.value = "";
})
