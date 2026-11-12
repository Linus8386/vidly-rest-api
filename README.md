# Vidly REST API

A RESTful API for a movie rental application built with **Node.js, Express.js, and MongoDB**.

## Features

- User registration and authentication.
- JWT-based authentication.
- Password hashing using bcrypt.
- Request validation using Joi.
- Protected API routes using authentication middleware.
- Movie, genre, customer, and rental management.
- MongoDB database integration using Mongoose.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- Joi
- Git and GitHub

## Project Structure

```text
vidly/
├── config/
├── middleware/
├── models/
├── routes/
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Linus8386/vidly-rest-api.git
```

### 2. Navigate into the project

```bash
cd vidly-rest-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Set your JWT private key before starting the application.

On Windows CMD:

```cmd
set vidly_jwtPrivateKey=your_secret_key
```

Use a strong, private key. Never commit actual secrets to GitHub.

### 5. Start MongoDB

Make sure your local MongoDB service is running.

### 6. Start the application

```bash
node index.js
```

The API runs on port **3000**.

## API Base URL

```text
http://localhost:3000/api
```

## Author

**Linus**

- GitHub: [Linus8386](https://github.com/Linus8386)
- LinkedIn: [Lanaus Kinyua](https://www.linkedin.com/in/lanaus-kinyua-a46ba1281/)
