# Assignment-2: JWT Authentication Project

### This project is a JWT (JSON Web Token) authentication system built using Node.js, Express, and MongoDB. It provides a secure way to register new users, authenticate existing users, and protect routes that require authentication.

---

## Features

- User registration: Users can sign up by providing a unique username and password.
- User authentication: Registered users can log in using their credentials to obtain a JWT token.
- Protected routes: Certain routes are protected and can only be accessed with a valid JWT token.
- Middleware: Middleware is used to verify the JWT token and grant access to protected routes.
- Password hashing: User passwords are securely hashed before being stored in the database.
- Error handling: Proper error handling is implemented to handle various scenarios.

## Usage

1. Make sure MongoDB is running on your system.
2. Update the MongoDB connection URL in the `server.js` file.
3. Start the server: `npm start`
4. The server will be running at `http://localhost:3000`.

## API Endpoints

- **POST /api/auth/signup** - Register a new user.
- **POST /api/auth/login** - Authenticate a user and obtain a JWT token.
- **GET /api/auth/protected** - Access a protected route (requires JWT token).

---
