# Student Management System (MERN Stack)

## Project Overview

This is a full-stack Student Management System developed using the MERN Stack. It provides secure JWT authentication and complete CRUD operations for managing students.

## Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Axios

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- View Students
- Add Student
- Update Student
- Delete Student
- Search Students
- Loading and Error Handling

## Installation

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/studentDB
JWT_SECRET=your_secret_key
```

## API Endpoints

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`

### Students

- GET `/api/students`
- GET `/api/students/:id`
- POST `/api/students`
- PUT `/api/students/:id`
- DELETE `/api/students/:id`

## Folder Structure

```text
student-management-fullstack/
│
├── backend/
├── frontend/
├── README.md
├── API_DOCUMENTATION.md
└── screenshots/
```