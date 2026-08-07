const express = require("express");
const router = express.Router();

const {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    searchStudents,
} = require("../controllers/studentController");

// Search Students
router.get("/search/:keyword", searchStudents);

// Get All Students
router.get("/", getAllStudents);

// Get Student by ID
router.get("/:id", getStudentById);

// Add Student
router.post("/", createStudent);

// Update Student
router.put("/:id", updateStudent);

// Delete Student
router.delete("/:id", deleteStudent);

module.exports = router;