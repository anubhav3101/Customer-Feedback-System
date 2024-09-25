# Customer Feedback System

This is a web application that allows users to submit feedback for products, view their submission history, and calculate average product ratings. The project consists of a **Flask** backend with **SQLAlchemy** for database management and a **React** frontend for the user interface.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- Submit feedback for products
- View submission history for each user
- Retrieve product feedback and average product ratings
- Basic form validation and error handling

## Tech Stack

- **Backend:** Flask, SQLAlchemy, SQLite
- **Frontend:** React, Axios
- **Database:** SQLite (can be replaced with PostgreSQL or others)
- **Others:** Flask-Migrate for database migrations

## Setup Instructions

### Backend Setup
1. Clone the repository and navigate to the backend folder.
    ```bash
    git clone https://github.com/your-username/customer-feedback-system.git
    cd customer-feedback-system/backend
    ```

2. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

4. Set up the database:
    ```bash
    flask db init
    flask db migrate -m "Initial migration"
    flask db upgrade
    ```

5. Run the Flask app:
    ```bash
    flask run
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd customer-feedback-frontend
    ```

2. Install the necessary packages:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm start
    ```

## Running the Application

Once both the frontend and backend servers are running:
- Backend: Runs on `http://localhost:5000`
- Frontend: Runs on `http://localhost:3000`

## Folder Structure

```bash
project-root/
│
├── backend/                     # Flask backend folder
│   ├── app.py                   # Main Flask app initialization
│   ├── config.py                # Configuration settings for Flask
│   ├── models.py                # Database models
│   ├── routes.py                # API routes
│
├── customer-feedback-frontend/   # React frontend folder
│   ├── src/
│   │   ├── components/
│   │   │   ├── FeedbackForm.js   # Feedback submission component
│   │   │   └── SubmissionHistory.js  # Feedback history component
│   │   ├── App.js               # Main app component
│   │   └── App.css              # CSS for styling
│   ├── public/                  # Static assets
│   └── package.json             # npm package details
│
├── migrations/                  # Database migration files (auto-generated)
└── app.db                       # SQLite database file (generated after migration)
