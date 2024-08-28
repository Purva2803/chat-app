# Chat Application API

## Overview

This chat application provides basic functionality for user authentication, real-time messaging, and group chat management. It supports JWT-based authentication, real-time messaging via Socket.IO, and message management for both individual and group chats.

### Features
1. User Authentication (Registration & Login)
2. Real-Time Messaging via WebSockets
3. Message Management (send messages, retrieve message history)
4. Group Chat Functionality (create group chats, send group messages)

### Technology Stack
- Node.js for the backend
- Express.js as the web framework
- MongoDB as the database
- Socket.IO for real-time messaging
- JWT (JSON Web Tokens) for authentication

## Prerequisites

Make sure you have the following installed:
- Node.js (v14 or higher)
- Docker and Docker Compose (for containerization)
- Postman or any REST client to test the APIs

## Installation

1. Clone the Repository
   ```
   git clone <repository_link>
   ```

2. Install Modules
   ```
   npm install
   ```

3. Environment Setup

Create a `.env` file and add the following environment variables:

```JWT_SECRET=your_jwt_secret```
MONGO_URI=mongodb://mongo:27017/chatapp
Run the Application Locally


4. Using Docker:

```
docker-compose up --build
```
Running Locally:

5. Make sure MongoDB is running locally, then run:

```
npm start
```

## Notes

1. **HTTP Files**:
   - The `.http` files (e.g., `user.http`, `messages.http`, `group.http`) contain the requests to test each API endpoint. These can be used with VSCode's REST client extension or Postman.

2. **Postman Testing**:
   - The provided HTTP file structure can also be imported into Postman if you're using it instead of VSCode's REST client.

3. **JWT Token**:
   - Make sure to replace `<your-jwt-token>` with the actual JWT token you get after logging in.
