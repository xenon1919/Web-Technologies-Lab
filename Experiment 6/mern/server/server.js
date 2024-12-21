const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Employee Schema
const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: String,
  department: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

// API Routes
app.get("/employees", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

app.post("/employees", async (req, res) => {
  const { name, email, position, department } = req.body;
  const newEmployee = new Employee({ name, email, position, department });
  await newEmployee.save();
  res.status(201).json(newEmployee);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
