// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].
var statusVisible = false;
const statusDiv = document.getElementById("status-output");
function toggleStatus(e) {
    e.preventDefault();

    //toggles the element's visibility, and updates the button's text based on said status
    statusDiv.classList.toggle("hidden");
    statusVisible = !statusVisible; 
    toggleButton.textContent = statusVisible ? "Hide Status" : "Show Status";

    //grants the main title a yellow background while status is visible
    if (statusVisible) {
        mainTitle.style.backgroundColor = "yellow";
        createTimestamp();
    } else {
        mainTitle.style.backgroundColor = "";
        document.body.classList.remove("pulse-red");
        document.body.classList.remove("pulse-blue");
    }
}

//creates a timestamp to be seen when the status is visible only
function createTimestamp() {
    const timeSpan = document.createElement("span");
    timeSpan.innerHTML = new Date().toLocaleTimeString();
    statusOutput.appendChild(timeSpan);
    statusOutput.appendChild(document.createElement("br"));
    
    if (getCurrentStatus()) {
        statusOutput.appendChild(document.createTextNode("EMERGENCY!!!"));
        document.body.classList.add("pulse-red");
    }
    else {
        statusOutput.appendChild(document.createTextNode("all good :)"));
        document.body.classList.add("pulse-blue");
    }
    statusOutput.appendChild(document.createElement("br"));
    statusOutput.appendChild(document.createElement("br"));
}

//self explanatory
function highlightListItems(){
    const items = document.querySelectorAll("#item-list li");
    
    for (var i=0; i< items.length; ++i) {
        items[i].style.color = "blue";
    }
}

function startFlashing() {
    if (intervalId !== null) {
        return;
    }
    intervalId = setInterval(function () {controlPanel.classList.toggle("hidden");}, 500);
}
function stopFlashing() {
    clearInterval(intervalId);
    intervalId = null;
}

//returns a 0 or 1 at random
function getCurrentStatus() {
    var temp = Math.floor(Math.random()*2);
    return temp;    
}

timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
toggleButton.addEventListener("click", toggleStatus);
highlightListItems();



/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].
