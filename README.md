# MERN Stack Capstone Project

This assignment focuses on designing, developing, and deploying a comprehensive full-stack MERN application that showcases all the skills you've learned throughout the course.

## Assignment Overview

You will:
1. Plan and design a full-stack MERN application
2. Develop a robust backend with MongoDB, Express.js, and Node.js
3. Create an interactive frontend with React.js
4. Implement testing across the entire application
5. Deploy the application to production

## Getting Started

1. Accept the GitHub Classroom assignment
2. Clone the repository to your local machine
3. Follow the instructions in the `Week8-Assignment.md` file
4. Plan, develop, and deploy your capstone project

## Files Included

- `Week8-Assignment.md`: Detailed assignment instructions

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Git and GitHub account
- Accounts on deployment platforms (Render/Vercel/Netlify/etc.)

## Project Ideas

The `Week8-Assignment.md` file includes several project ideas, but you're encouraged to develop your own idea that demonstrates your skills and interests.

## Submission

Your project will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Commit and push your code regularly
2. Include comprehensive documentation
3. Deploy your application and add the live URL to your README.md
4. Create a video demonstration and include the link in your README.md


# eLearning Platform (MERN Stack Capstone Project)

A full-stack eLearning platform built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
This project allows instructors to create courses, students to enroll, take lessons and quizzes, and admins to manage users and content.

---

## Project Description

This eLearning platform provides a comprehensive environment for online learning:

- **Admin:** Manage users, courses, and site settings.  
- **Instructor:** Create and manage courses, lessons, and quizzes.  
- **Student:** Browse courses, enroll, complete lessons and quizzes.  

The project demonstrates a full MERN stack workflow including RESTful APIs, authentication with JWT, and frontend-backend integration.

---

## Features

- User authentication and role-based access (Admin, Instructor, Student)  
- Course creation and management  
- Lesson content upload  
- Quiz creation and grading  
- Enrollment management  
- Responsive design for desktop and mobile  

---

## Setup Instructions

### **Backend**

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/mern-final-project-esther-malowa.git
cd mern-final-project-esther-malowa/Backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in Backend/ with the following:

ini
Copy code
PORT=5000
MONGO_URI=<your MongoDB connection string>
JWT_SECRET=<your secret key>
Run the server:

bash
Copy code
npm start
The backend will run on http://localhost:5000

Frontend
Navigate to the frontend folder:

bash
Copy code
cd ../Frontend/client
Install dependencies:

bash
Copy code
npm install
Create a .env file in Frontend/client/:

bash
Copy code
REACT_APP_API_URL=http://localhost:5000/api
Run the frontend:

bash
Copy code
npm start
The frontend will run on http://localhost:3000

Deployed Application
Backend (Render): https://mern-final-project-esther-malowa.onrender.com

Frontend (Vercel): https://mern-final-project-esther-malowa-frontend.vercel.app

Video Demonstration

Screenshots of Key Features
![Homepage Screenshot](./Frontend/client/screenshots/Homepage.png)
![Footer Screenshot](./Frontend/client/screenshots/Footer.png)
![Admin Dashboard Screenshot](./Frontend/client/screenshots/Admin dashboard.png)
![Register](./Frontend/client/screenshots/register.png)
![Login](./Frontend/client/screenshots/login.png)





Technologies Used
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT authentication

Frontend: React.js, Axios, React Router

Deployment: Render (backend), Vercel (frontend)



## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [GitHub Classroom Guide](https://docs.github.com/en/education/manage-coursework-with-github-classroom) 
