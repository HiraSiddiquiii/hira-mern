# JWT Authentication API

A secure REST API built with **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **JWT**, and **bcryptjs**. This project demonstrates user authentication using JSON Web Tokens (JWT), password hashing, and protected routes.

## 🚀 Features

* User Registration
* User Login
* Password Hashing using bcryptjs
* JWT Token Generation
* Authentication Middleware
* Protected Routes
* MongoDB Database Integration
* Error Handling
* API Testing with Postman

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcryptjs
* jsonwebtoken (JWT)
* dotenv
* cors
* Postman

## 📁 Project Structure

```
day6-auth-api/
│
├── config/
│   └── db.js
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── screenshots/
│   ├── register-api.png
│   ├── login-api.png
│   └── protected-route-api.png
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/HiraSiddiquiii/day6-auth-api.git

### 2. Navigate to the project folder

```bash
cd day6-auth-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5. Start the development server

```bash
npm run dev
```

The server will start on:

```
http://localhost:5000
```

## 📌 API Endpoints

### Register User

**POST**

```
/api/auth/register
```

Request Body:

```json
{
  "name": "Hira Siddiqui",
  "email": "hira@gmail.com",
  "password": "123456"
}
```

---

### Login User

**POST**

```
/api/auth/login
```

Request Body:

```json
{
  "email": "hira@gmail.com",
  "password": "123456"
}
```

---

### Protected Route

**GET**

```
/api/profile
```

Headers:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

## 🧪 API Testing

All endpoints were successfully tested using **Postman**.

The exported Postman Collection is included in this repository:

* `Day6-JWT-Authentication.postman_collection.json`

## 📷 Screenshots

API testing screenshots are available in the **screenshots** folder.

* Register API
* Login API
* Protected Route

## 👩‍💻 Author

**Hira Siddiqui**

---

**HisabDo MERN Stack Internship – Day 6**

JWT Authentication | Node.js | Express.js | MongoDB | Mongoose | JWT | bcryptjs
