const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock user data
const users = [
  {
    username: "user123",
    password: "$2a$10$5UzZsh9mHE6ZW3yDCrGysErVf7jqZ62g8Xg3kpsv3cZyZf0z.yz4i", // hashed 'password123'
  },
];

const JWT_SECRET = "mysecretkey";

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: "1h" });
};

// Login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(401).send({ message: "Invalid credentials" });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = generateToken(user);
      res.send({ message: "Login successful", token });
    } else {
      res.status(401).send({ message: "Invalid credentials" });
    }
  });
});

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).send({ message: "Access denied" });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(403).send({ message: "Invalid or expired token" });
    req.user = decoded;
    next();
  });
};

// Dashboard route
app.get("/api/dashboard", authenticateToken, (req, res) => {
  res.send({ message: `Welcome to the dashboard, ${req.user.username}!` });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
