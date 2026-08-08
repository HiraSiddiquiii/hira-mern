# Student Management REST API

A simple **Student Management REST API** built with **Node.js** and **Express.js**. This project demonstrates CRUD (Create, Read, Update, Delete) operations using an in-memory array without a database.

## Features

* View all students
* View a student by ID
* Add a new student
* Update student information
* Delete a student
* Basic input validation
* Proper HTTP status codes
* Error handling
* RESTful API design

## Technologies Used

* Node.js
* Express.js
* JavaScript
* REST API
* JSON

## Project Structure

```
student-management-api/
│── node_modules/
│── server.js
│── package.json
│── package-lock.json
│── README.md
└── .gitignore
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/student-management-api.git
```

2. Navigate to the project folder:

```bash
cd student-management-api
```

3. Install dependencies:

```bash
npm install
```

## Running the Project

Start the server:

```bash
node server.js
```

Or, if using Nodemon:

```bash
npx nodemon server.js
```

The server will start on:

```
http://localhost:5000
```

## API Endpoints

| Method | Endpoint        | Description         |
| ------ | --------------- | ------------------- |
| GET    | `/students`     | Get all students    |
| GET    | `/students/:id` | Get a student by ID |
| POST   | `/students`     | Add a new student   |
| PUT    | `/students/:id` | Update a student    |
| DELETE | `/students/:id` | Delete a student    |

## Sample Request

### POST `/students`

```json
{
  "name": "Hira",
  "email": "hira@gmail.com",
  "course": "MERN",
  "marks": 95
}
```

## Sample Success Response

```json
{
  "message": "Student added successfully",
  "student": {
    "id": 2,
    "name": "Hira",
    "email": "hira@gmail.com",
    "course": "MERN",
    "marks": 95
  }
}
```

## Sample Error Response

```json
{
  "message": "All fields are required"
}
```

## API Testing

The API was tested using **Thunder Client**.

Test cases include:

* Successful GET requests
* Successful POST request
* Successful PUT request
* Successful DELETE request
* Invalid ID (404)
* Missing required fields (400)
* Invalid data type (400)

## Screenshots

### GET All Students
![GET All Students](screenshots/GET%20All%20Students.png)

### GET Student by ID
![GET Student by ID](screenshots/GET%20Student%20by%20ID.png)

### POST Student
![POST Student](screenshots/POST%20Student.png)

### PUT Student
![PUT Student](screenshots/PUT%20Student.png)

### DELETE Student
![DELETE Student](screenshots/Delete%20Student.png)
### Invalid ID Error
![Invalid ID](screenshots/invalid-id.png)

### Missing Fields Error
![Missing Fields](screenshots/missing-fields.png)

### Invalid Data Error
![Invalid Data](screenshots/invalid-data.png)
## Author

**Hira Siddiqui**

**MERN Stack Internship – Day 4**
**HisabDo Internship Bootcamp**
