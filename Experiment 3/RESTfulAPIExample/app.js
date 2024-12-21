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

/*
Explanation of Endpoints
GET /listUsers:

Returns the list of all users in the system.
Example:
bash
Copy code
curl http://localhost:3000/listUsers
POST /addUser:

Adds a new user to the system.
Example:
bash
Copy code
curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Alice", "age": 22}' \
http://localhost:3000/addUser
DELETE /deleteUser:

Deletes a user by id.
Example:
bash
Copy code
curl -X DELETE -H "Content-Type: application/json" \
-d '{"id": 2}' \
http://localhost:3000/deleteUser
GET /:id:

Fetches the details of a specific user by their id.
Example:
bash
Copy code
curl http://localhost:3000/1
Expected Output
Sr.No	URI	HTTP Method	POST Body	Result
1	/listUsers	GET	empty	Show list of all the users.
2	/addUser	POST	JSON String	Add details of a new user.
3	/deleteUser	DELETE	JSON String	Delete an existing user.
4	/:id	GET	empty	Show details of a specific user.
*/
