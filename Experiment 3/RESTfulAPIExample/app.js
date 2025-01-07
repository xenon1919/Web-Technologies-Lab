const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware for parsing JSON
app.use(bodyParser.json());

let users = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
];

// GET: List all users
app.get("/listUsers", (req, res) => {
  res.json(users);
});

// POST: Add a new user
app.post("/addUser", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1; // Assign a unique ID
  users.push(newUser);
  res.status(201).send("User added successfully");
});

// DELETE: Delete a user by ID
app.delete("/deleteUser", (req, res) => {
  const { id } = req.body;
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.send("User deleted successfully");
  } else {
    res.status(404).send("User not found");
  }
});

// GET: Get details of a specific user by ID
app.get("/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


