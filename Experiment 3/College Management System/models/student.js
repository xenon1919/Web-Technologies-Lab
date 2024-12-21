// Simulating a database
let students = [
  { id: 1, name: "Rishi", age: 20, course: "Computer Science" },
  { id: 2, name: "Sai Teja", age: 22, course: "Electronics" },
];

// Functions to interact with the data
const getAllStudents = () => students;

const getStudentById = (id) =>
  students.find((student) => student.id === parseInt(id));

const addStudent = (student) => {
  student.id = students.length + 1; // Auto-increment ID
  students.push(student);
};

module.exports = { getAllStudents, getStudentById, addStudent };
