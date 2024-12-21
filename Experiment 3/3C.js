// Import required modules
const express = require("express");
const path = require("path");

// Initialize Express app
const app = express();

// Middleware configuration
app.use(express.json()); // Parses JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

// Routing HTTP requests
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Express.js Demo!");
});

router.get("/about", (req, res) => {
  res.send("This is the About page.");
});

router.get("/contact", (req, res) => {
  res.send("This is the Contact page.");
});

app.use("/", router);

// Rendering HTML views
app.set("views", path.join(__dirname, "views")); // Views folder path
app.set("view engine", "ejs"); // Setting EJS as the template engine

app.get("/html-view", (req, res) => {
  res.render("index", {
    title: "Express.js Example",
    message: "Hello, World!",
  });
});

// Registering a template engine (EJS Example)
// Create a "views" folder with an `index.ejs` file containing:
// <html>
// <head><title><%= title %></title></head>
// <body>
//     <h1><%= message %></h1>
// </body>
// </html>

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
