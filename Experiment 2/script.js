function highlightInput(input) {
    input.style.backgroundColor = '#e9f5ff';
}

// Remove highlight when focus is lost
function removeHighlight(input) {
    input.style.backgroundColor = 'white';
}

// Validate age
function validateAge(input) {
    const age = input.value;
    const message = document.getElementById('message');
    if (age < 0 || age > 120) {
        message.textContent = 'Please enter a valid age!';
        message.style.color = 'red';
    } else {
        message.textContent = '';
    }
}

// Handle form submission
function handleSubmit() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    const message = document.getElementById('message');

    if (username && email && age) {
        message.textContent = `Thank you, ${username}! Your data has been submitted.`;
        message.style.color = 'green';
    } else {
        message.textContent = 'Please fill out all fields!';
        message.style.color = 'red';
    }
}
