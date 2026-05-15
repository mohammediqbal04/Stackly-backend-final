# Task Management REST API

A secure backend REST API built using Node.js, Express.js, MongoDB Atlas, JWT Authentication, and bcrypt password hashing.

## Features

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes
- Create Task
- Get All Tasks
- Get Single Task
- Update Task
- Delete Task
- User-specific task authorization
- MongoDB Atlas integration
- RESTful API architecture

---

# Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- Vercel

---

# Project Structure

```txt
project-root/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── userModel.js
│   └── taskModel.js
│
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── vercel.json
```

---

# API Endpoints

## Authentication Routes

### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "name": "Mohammed",
  "email": "mohammed@gmail.com",
  "password": "123456"
}
```

---

### Login User

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "mohammed@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "Login Successful",
  "token": "jwt_token"
}
```

---

# Task Routes (Protected)

Add JWT token in Authorization header:

```txt
Authorization: Bearer your_jwt_token
```

---

## Create Task

```http
POST /api/tasks
```

Request Body:

```json
{
  "title": "Learn JWT",
  "description": "Practice authentication",
  "completed": false
}
```

---

## Get All Tasks

```http
GET /api/tasks
```

---

## Get Single Task

```http
GET /api/tasks/:id
```

---

## Update Task

```http
PUT /api/tasks/:id
```

Request Body:

```json
{
  "title": "Updated Task",
  "completed": true
}
```

---

## Delete Task

```http
DELETE /api/tasks/:id
```

---

# Authentication Flow

1. Register user
2. Login user
3. Receive JWT token
4. Send token in protected routes
5. Access user-specific tasks securely

---

# Security Features

- Password hashing using bcrypt
- JWT authentication
- Protected routes middleware
- User-specific task authorization
- Unauthorized access prevention

---

# Deployment

Backend deployed using Vercel.

Live API:

```txt
https://stackly-backend-final.vercel.app
```

---

# Testing

API tested using Postman.

---

# Developed by

Mohammed Iqbal J

GitHub:
https://github.com/mohammediqbal04
