const express = require("express");
const app = express();
const studentRoutes = require("./routes/studentRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set("view engine", "ejs");

// Use routes
app.use("/students", studentRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/*
How to Run:
Save the files in the specified folder structure.
Start the server:
bash
Copy code
node app.js
Open a browser:
View all students: http://localhost:3000/students
Fetch a student by ID: http://localhost:3000/students/1
Use tools like Postman or curl to test the POST endpoint:
bash
Copy code
curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Alice", "age": 21, "course": "Mechanical"}' \
http://localhost:3000/students

*/
