const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

let students = [
  {
    id: 1,
    name: "Ali",
    email: "ali@example.com",
    course: "MERN",
    marks: 85,
  },
];

// GET All Students
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// GET Student by ID
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.status(200).json(student);
});

// POST Student
app.post("/students", (req, res) => {
  const { name, email, course, marks } = req.body;

  if (!name || !email || !course || marks === undefined) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  if (typeof marks !== "number") {
    return res.status(400).json({
      message: "Marks must be a number",
    });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    email,
    course,
    marks,
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent,
  });
});

// PUT Student
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  const { name, email, course, marks } = req.body;

  if (!name || !email || !course || marks === undefined) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  student.name = name;
  student.email = email;
  student.course = course;
  student.marks = marks;

  res.status(200).json({
    message: "Student updated successfully",
    student,
  });
});

// DELETE Student
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  students.splice(index, 1);

  res.status(200).json({
    message: "Student deleted successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});