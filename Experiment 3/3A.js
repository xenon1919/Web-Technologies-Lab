// Import the required module
const http = require("http");

// Create the server
http
  .createServer((req, res) => {
    // Set the content type to text/plain
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Get the current date and time
    const currentDateTime = new Date();

    // Write the response
    res.write(`Hello! The current date and time is: ${currentDateTime}`);

    // End the response
    res.end();
  })
  .listen(3000, () => {
    console.log("Server is running at http://localhost:3000/");
  });
