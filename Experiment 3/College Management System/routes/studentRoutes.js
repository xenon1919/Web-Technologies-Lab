const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Route to get all students
router.get("/", studentController.getAllStudents);

// Route to get a student by ID
router.get("/:id", studentController.getStudent);

// Route to add a new student
router.post("/", studentController.addStudent);

module.exports = router;
