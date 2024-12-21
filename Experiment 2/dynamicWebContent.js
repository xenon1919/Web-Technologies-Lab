function displayGreeting() {
    var name = document.getElementById("nameInput").value;
    var greetingDiv = document.getElementById("greetingMessage");
    greetingDiv.innerHTML = `<p>Hello, ${name}! Welcome to our website.</p>`;
}