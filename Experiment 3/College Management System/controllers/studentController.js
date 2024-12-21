const studentModel = require("../models/student");

// Controller functions
const getAllStudents = (req, res) => {
  const students = studentModel.getAllStudents();
  res.render("students", { students }); // Rendering view with data
};

const getStudent = (req, res) => {
  const student = studentModel.getStudentById(req.params.id);
  if (student) {
    res.json(student);
  } else {
    res.status(404).send("Student not found");
  }
};

const addStudent = (req, res) => {
  const newStudent = req.body;
  studentModel.addStudent(newStudent);
  res.status(201).send("Student added successfully");
};

module.exports = { getAllStudents, getStudent, addStudent };
