
# Extraordinary JoBle

Extraordinary JoBle is a web application designed for couples to share their daily schedules, set reminders, and encourage each other. It helps in staying connected and accountable to each other.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Signup, Login)
- Dashboard
- Daily Schedule Sharing
- Reminders
- Encouragement Messages
- Notifications

## Tech Stack

- **Frontend**: React.js, CSS, Axios, React Router
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase Authentication
- **Hosting**: Vercel (Frontend), Heroku (Backend), MongoDB Atlas (Database)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/extraordinary-joble.git
    cd extraordinary-joble
    ```

2. Install dependencies for both frontend and backend:

    ```bash
    cd frontend
    npm install

    cd ../backend
    npm install
    ```

### Running the Application

1. Start the backend server:

    ```bash
    cd backend
    npm start
    ```

    The backend server will start on `http://localhost:5000`.

2. Start the frontend development server:

    ```bash
    cd frontend
    npm start
    ```

    The frontend server will start on `http://localhost:3000`.

## Project Structure

```plaintext
ExtraordinaryJoBle/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   ├── ...
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── package.json
│   ├── ...
│
└── README.md
```

## Usage

1. Register a new account or log in with existing credentials.
2. Navigate to the Dashboard to view and share daily schedules.
3. Set reminders for important tasks.
4. Send encouragement messages to each other.
5. Receive notifications for updates and reminders.

## API Endpoints

### Auth

- `POST /api/v1/auth/signup`: Register a new user
- `POST /api/v1/auth/login`: Login a user

### Schedules

- `GET /api/v1/schedules`: Get all schedules
- `POST /api/v1/schedules`: Create a new schedule
- `PUT /api/v1/schedules/:id`: Update a schedule
- `DELETE /api/v1/schedules/:id`: Delete a schedule

### Reminders

- `GET /api/v1/reminders`: Get all reminders
- `POST /api/v1/reminders`: Create a new reminder
- `PUT /api/v1/reminders/:id`: Update a reminder
- `DELETE /api/v1/reminders/:id`: Delete a reminder

### Encouragements

- `GET /api/v1/encouragements`: Get all encouragement messages
- `POST /api/v1/encouragements`: Send a new encouragement message

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


