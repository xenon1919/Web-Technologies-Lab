// script.js

// Event fired when the page has loaded completely
window.addEventListener('load', function() {
    console.log('Page has fully loaded.');
    const message = document.getElementById('message');
    message.textContent = "Page has fully loaded!";
    message.style.color = 'blue';
});

// Event fired when the mouse moves over an element
function showMouseOverMessage() {
    const message = document.getElementById('message');
    message.textContent = "Mouse is over the text!";
    message.style.color = 'purple';
}

// Event fired when a user clicks the button
function showClickMessage() {
    const message = document.getElementById('message');
    message.textContent = "Button clicked!";
    message.style.color = 'green';
}

// Event fired when a value changes in the input field or dropdown list
function showChangeMessage(event) {
    const message = document.getElementById('message');
    const elementId = event.target.id;

    if (elementId === 'textInput') {
        message.textContent = `You entered: ${event.target.value}`;
    } else if (elementId === 'dropdown') {
        message.textContent = `You selected: ${event.target.value}`;
    }

    message.style.color = 'orange';
}

// Finding elements by id
document.getElementById('clickButton').addEventListener('click', function() {
    alert('Element found by id: clickButton');
});

// Finding elements by tag name
let allButtons = document.getElementsByTagName('button');
console.log('Buttons in the document:', allButtons);

// Finding elements by class name
let allInputs = document.getElementsByClassName('form-input');
console.log('Inputs in the document:', allInputs);
