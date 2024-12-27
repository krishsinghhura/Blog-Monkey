# Blog Application

## Description
This project is a basic blog application that allows users to register, log in, and create blog posts. It consists of a frontend built with React and a backend built with Node.js, Express, and MongoDB.

---

## Features
- **User Authentication:**
  - Register with username, email, and password.
  - Login with username and password.
  - Passwords are hashed using bcrypt for security.
  - JSON Web Token (JWT) is used for authentication.
- **Blog Management:**
  - Create blog posts with a title, content, and author.
  - View all blog posts on the homepage.

---

## Frontend Setup

### Prerequisites
- Node.js and npm installed.
- Vite development environment for React.

### Installation
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Access the app at `http://localhost:5173`.

---

## Backend Setup

### Prerequisites
- Node.js and npm installed.
- MongoDB installed and running.

### Installation
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. The backend will run at `http://localhost:4000`.

---

## API Endpoints

### User Routes
1. **Register**
   - Endpoint: `POST /register`
   - Body:
     ```json
     {
       "username": "string",
       "email": "string",
       "password": "string"
     }
     ```
   - Response: 
     ```json
     {
       "message": "User registered and logged in",
       "token": "string"
     }
     ```

2. **Login**
   - Endpoint: `POST /login`
   - Body:
     ```json
     {
       "username": "string",
       "password": "string"
     }
     ```
   - Response:
     ```json
     {
       "message": "logged in",
       "token": "string"
     }
     ```

### Post Routes
1. **Create Post**
   - Endpoint: `POST /posts`
   - Body:
     ```json
     {
       "title": "string",
       "content": "string",
       "author": "string"
     }
     ```
   - Response:
     ```json
     {
       "message": "Post Created"
     }
     ```

2. **Fetch Posts**
   - Endpoint: `GET /posts`
   - Response:
     ```json
     [
       {
         "_id": "string",
         "title": "string",
         "content": "string",
         "author": "string"
       }
     ]
     ```

---

## Technologies Used

### Frontend
- React
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- bcrypt for password hashing
- JSON Web Token (JWT) for authentication

---

## Additional Notes
- Ensure MongoDB is running locally or provide a valid connection string in `.env`.
- CORS is configured to allow requests from `http://localhost:5173`.
- Cookies are used for storing JWT tokens on the client side.

---

## License
This project is licensed under the MIT License.

---

## Contact
For questions or support, please reach out via [email@example.com](mailto:email@example.com).
