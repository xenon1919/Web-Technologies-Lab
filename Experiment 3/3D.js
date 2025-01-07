// Import the required http module
const http = require("http");
const url = require("url");

// Define the requestListener function
const requestListener = (req, res) => {
  // Parse the URL and query parameters
  const parsedUrl = url.parse(req.url, true);
  const queryParams = parsedUrl.query;

  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Handle different routes
  if (parsedUrl.pathname === "/greet") {
    const name = queryParams.name || "Guest";
    res.end(`Hello, ${name}! Welcome to our Node.js server.`);
  } else if (parsedUrl.pathname === "/sum") {
    const num1 = parseInt(queryParams.num1) || 0;
    const num2 = parseInt(queryParams.num2) || 0;
    const sum = num1 + num2;
    res.end(`The sum of ${num1} and ${num2} is ${sum}.`);
  } else {
    res.end(
      "Invalid route! Please try /greet or /sum with appropriate query parameters."
    );
  }
};

// Create the server
const server = http.createServer(requestListener);

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});

