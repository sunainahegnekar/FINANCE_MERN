# Cashlytic - Expense Management App

Cashlytic is a finance management application built using the MERN stack. It allows users to track expenses, manage documents, and collaborate in real time.

## Project Structure
- **Backend**: Located in the `finance_app_backend` folder.
- **Frontend**: Located in the `FINANCE_FRONTEND_NEW` folder.

---

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Git](https://git-scm.com/)

---

## Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd finance_app_backend
   ```
2. Install dependencies:
   npm install
   ```
3. Create a `.env` file and add the required environment variables:
   ```plaintext
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   PORT=5000
   ```
4. Start the backend server:
   ```sh
   npm start
   ```
   The backend will run at `http://localhost:5000/`.

---

## Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd ../FINANCE_FRONTEND_NEW
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the frontend folder:
   ```plaintext
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```
4. Start the frontend server:
   ```sh
   npm start
   ```
   The frontend will run at `http://localhost:3000/`.

---

## Running the Full Project
Ensure both frontend and backend servers are running simultaneously:
- Open two terminal windows
- Run the backend in one (`npm start` inside `finance_app_backend`)
- Run the frontend in another (`npm start` inside `FINANCE_FRONTEND_NEW`)
---

## Features
- User authentication & authorization
- Expense tracking
- Real-time updates
- Document management
- Collaboration tools

---

## Technologies Used
- **Frontend**: React.js, Tailwind CSS (if applicable)
- **Backend**: Node.js, Express.js, MongoDB, JWT Authentication

---

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request


