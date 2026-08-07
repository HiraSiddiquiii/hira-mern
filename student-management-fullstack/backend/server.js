require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");

const authMiddleware = require("./middleware/authMiddleware");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Student Management API Running...");
});

// Authentication Routes
app.use("/api/auth", authRoutes);

// Student Routes (Protected)
app.use("/api/students", authMiddleware, studentRoutes);

// Protected Profile
app.get("/api/profile", authMiddleware, (req, res) => {
    res.json({
        success: true,
        user: req.user,
    });
});

// Handle Invalid Routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found",
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});