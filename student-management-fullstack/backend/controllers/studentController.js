const Student = require("../models/Student");

// Get All Students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: students.length,
            students,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get Student By ID
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            student,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Create Student
const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);

        res.status(201).json({
            success: true,
            message: "Student added successfully",
            student,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// Update Student
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            student,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// Delete Student
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Search Students
const searchStudents = async (req, res) => {
    try {
        const keyword = req.params.keyword;

        const students = await Student.find({
            $or: [
                {
                    name: {
                        $regex: keyword,
                        $options: "i",
                    },
                },
                {
                    email: {
                        $regex: keyword,
                        $options: "i",
                    },
                },
                {
                    course: {
                        $regex: keyword,
                        $options: "i",
                    },
                },
            ],
        });

        res.status(200).json({
            success: true,
            count: students.length,
            students,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    searchStudents,
};