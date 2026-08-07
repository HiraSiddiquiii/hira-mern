# API Documentation

## Authentication

### Register

**POST** `/api/auth/register`

Example Request:

```json
{
  "name": "Hira Siddiqui",
  "email": "hirasiddiqui@gmail.com",
  "password": "123456"
}
```

### Login

**POST** `/api/auth/login`

Example Request:

```json
{
  "email": "hirasiddiqui@gmail.com",
  "password": "123456"
}
```

## Student APIs

### Get All Students

**GET** `/api/students`

### Get Student by ID

**GET** `/api/students/:id`

### Add Student

**POST** `/api/students`

Example Request:

```json
{
  "name": "Ali Khan",
  "email": "ali@gmail.com",
  "course": "MERN Stack",
  "marks": 90
}
```

### Update Student

**PUT** `/api/students/:id`

### Delete Student

**DELETE** `/api/students/:id`