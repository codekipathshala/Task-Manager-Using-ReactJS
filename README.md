# 🚀 ReactJS Task Manager

A modern **Task Manager application built with ReactJS** to demonstrate how real-world React applications can be structured using **Context API, React Hooks, CRUD operations, authentication, React Router, and reusable components**.

This project is part of the practical **ReactJS project-based learning series by Code Ki Pathshala**, where React concepts are learned by building real-world applications.

---

## 📌 About The Project

The ReactJS Task Manager is a practical task management application where authenticated users can create, view, update, and delete their tasks.

The main goal of this project is to understand how different React concepts work together inside a real application instead of learning them as isolated examples.

### Key Concepts Covered

- ReactJS
- Functional Components
- Props
- State Management
- React Hooks
- Context API
- useContext
- useState
- useEffect
- React Router
- Authentication
- CRUD Operations
- Controlled Forms
- Conditional Rendering
- Reusable Components
- Component Architecture
- Global State Management

---

## ✨ Features

### 🔐 Authentication

- User Registration
- User Login
- Logout functionality
- Authentication state management
- Conditional navigation based on authentication state

### 📝 Task Management

Users can perform complete CRUD operations:

- ➕ Create new tasks
- 👀 View tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks

### 🧠 Context API

The application uses **React Context API** for managing shared application state.

Two major contexts are used:

- `AuthContext` — manages authentication and user information
- `TaskContext` — manages task-related state and CRUD operations

This demonstrates how Context API can help avoid unnecessary prop drilling when multiple components need access to shared data.

### 🧭 Client-Side Routing

The application uses **React Router** for navigation between different pages.

The project separates route configuration from the main application logic, making the routing structure easier to understand and maintain.

### 🧩 Reusable React Components

The application is built using reusable components to keep the UI modular and maintainable.

Examples include:

- Navbar
- Task List
- Task Card
- Task Form
- Authentication Forms

---

## 🔄 Application Flow

### Authentication Flow

```text
User
 ↓
Register / Login
 ↓
AuthContext
 ↓
currentUser
 ↓
Authenticated Application
````

### Task Flow

```text
Task Form
 ↓
Task Context
 ↓
tasks[]
 ↓
Task List
 ↓
Task Card
```

### CRUD Flow

```text
Create  → addTask()
Read    → tasks[]
Update  → updateTask()
Delete  → deleteTask()
```

---

## 🧠 Why Context API?

A major purpose of this project is to understand **how and why Context API can be used for shared state management in ReactJS**.

Instead of passing the same data through multiple component levels, shared state can be accessed directly by the components that need it.

```text
Context
   │
   ├── Task List
   ├── Task Card
   └── Task Form
```

This makes the application easier to manage as it grows.

---

## 🛠️ Tech Stack

### Frontend

* ReactJS
* JavaScript (ES6+)
* React Router
* Context API
* React Hooks
* HTML5
* CSS3

---

## 🎯 Learning Objectives

This project is designed to help developers strengthen their **ReactJS fundamentals through practical project development**.

By building this Task Manager, you can understand:

* How React components work together
* How state is managed in React
* How Context API works
* How global state can be shared across components
* How CRUD functionality is implemented
* How React Router handles navigation
* How controlled forms work
* How authentication state can be managed
* How reusable React components are created
* How to structure a real-world React application

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm

Check your installed versions:

```bash
node -v
npm -v
```

### Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate to the project:

```bash
cd YOUR_PROJECT_FOLDER
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will now be available on your local development server.

---

## 🎥 Learn With Code Ki Pathshala

This project was built as part of the **Code Ki Pathshala ReactJS Project-Based Learning Series**.

The goal of the series is simple:

> **Learn ReactJS by building real-world projects.**

Instead of only covering React concepts theoretically, each project focuses on implementing those concepts in a practical application.

📺 **YouTube:** Code Ki Pathshala

🔗 Add your YouTube tutorial / live stream link here.

---

## 🔮 Future Improvements

Some features that can be added in future versions:

* REST API integration
* Node.js and Express.js backend
* MongoDB database
* JWT authentication
* Password hashing with bcrypt
* User-specific tasks
* Task priorities
* Task categories
* Due dates
* Search and filtering
* Deployment

---

## ⭐ Support

If this project helped you understand ReactJS concepts, consider giving this repository a ⭐ **Star**.

For more practical **ReactJS, JavaScript, and MERN Stack projects**, follow **Code Ki Pathshala**.

---

## 📄 License

This project is created for educational and learning purposes.

