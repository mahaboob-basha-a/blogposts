# BlogPosts

## Overview

The BlogPosts project is a simple blog post application with a backend built using Node.js and SQLite3, and a frontend built using React. The project consists of two main parts: the `frontend` directory and the `backend` directory.

## Folder Structure

## Backend (Node.js and SQLite3)

### Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo/backend
   ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Start the server:**
    ```bash
    npm start

    The server should now be running on `http://localhost:5000`.
    ```
#### API Endpoints
1. **GET /posts:** Retrieve all posts.

    - **Response:** `200 OK` with an array of posts.
2. **GET /posts/**: Retrieve a single post by its **ID**.

- **Response:** `200 OK` with the post data.
3. **POST /posts/** Create a new post.

    - **Request Body:** JSON with title and description.
    - **Response:** `201 Created` with a success message.
4. **PUT /posts/:id**: Update an existing post by its ID.

    - **Request Body:** JSON with `title` and `description`.
    - **Response:** `200 OK` with a success message.
5. **DELETE /posts/:id**: Delete a post by its ID.

    - **Response:** `200 OK` with a success message.
**Error Handling**
All routes include error handling. If an error occurs during a request, the server will return an appropriate status code (e.g., 400 for client errors, 500 for server errors) and a message describing the error.

## Frontend (React)
### Project Setup
1. #### Clone the repository:
    ```bash
    git clone
    cd frontend
    ```
2. #### Install dependencies:
    ```bash
    npm install
    ```
3. #### Start the development server:
    ```bash
    npm start

    The app should now be running on `http://localhost:3000`.
    ```
#### Main Components
1. **Home Component:** Displays a list of blog posts.

2. **BlogPost Component:** Handles viewing, editing, and deleting a single blog post.

- Uses `axios` for API requests.
- Implements form validation and error handling using `react-toastify`.
3. **CreateForm Component:** Provides a form to create a new blog post.

- Validates the input fields and shows error messages using `react-toastify`.
4. **NotFound Component:** A simple 404 page for invalid routes.

### Context and State Management
ModalContext: Manages the state of modals across different components. It provides functionalities like opening and closing modals.
### Styling
- **Responsive Design:** The UI is fully responsive, designed to work on both desktop and mobile devices.
- **CSS Modules:** Styling is done using CSS modules to keep styles scoped and organized.
#### Additional Notes
- **API Base URL:** Ensure that the base URL for API requests is correctly set up in your environment files.
- **Dependencies:** This project uses `axios` for HTTP requests and `react-toastify` for notifications.