# Courier-app
 
# Overview
This documentation provides step-by-step instructions on setting up a full-stack web application using Express.js for the backend, MongoDB for the database, React for the frontend. This application includes user authentication, profile management, and protected routes. Here's a breakdown of what's included:

Backend: Express.js API with MongoDB integration, user authentication, custom middleware, and error handling.

Frontend: React application with a Bootstrap UI library and Toastify notifications.

# Prerequisites
Before you begin, make sure you have the following:

MongoDB database and URI (e.g., MongoDB Atlas).
Node.js and npm installed on your machine.

# Getting Started
1. Clone the Repository
Clone the project repository to your local machine:

2. Configure Environment Variables
Create the .env and set the following variables:


NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=abc123

Replace your_mongodb_uri and your_paypal_client_id with your actual MongoDB URI and PayPal Client ID. You can also change the JWT_SECRET as desired.

3. Install Dependencies
Install both backend and frontend dependencies:

npm install
cd frontend
npm install

# Running the Application
4. Start the Development Server
To run both the frontend and backend concurrently, use:

npm run dev
The frontend will be available at http://localhost:3000, and the backend at http://localhost:5000.

To run only the backend server:

npm run server

