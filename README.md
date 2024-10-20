# Todo List MERN Application

This is a simple Todo List application built using React, Node.js, Express, and MongoDB. It allows users to add, update, delete, and search for todo items. Each todo item has a name and a status which can be either "pending", "in progress", or "completed".

## Features

- **Add Todo Item:** Users can add a new todo item with a name and status.
- **Update Todo Item:** Users can update the name and status of an existing todo item.
- **Delete Todo Item:** Users can delete a todo item.
- **Search Todo Items:** Users can search for todo items by name or status.

## Technologies Used

- **Frontend:**
  - React
  - Axios (for HTTP requests)
  - CSS (for styling)

- **Backend:**
  - Node.js
  - Express
  - Mongoose (for MongoDB interaction)

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/murlipatel1/todo_list_mern_kaushalam.git
   cd todo-list-app

2. **Install dependencies:**
    ```bash
    cd backend
    npm install
    ```

    ```bash
    cd frontend
    npm install
    ```

3. **Run frontend in client directory**
    ```bash
    npm run start
    ```

4. **Run backend in server directory**
    ```bash
    nodemon index.js
    ```
## Usage

- Open the application in your browser at http://localhost:3000.
- Use the form to add new todo items.
- View the list of todo items.
- Use the buttons to update or delete todo items.
- Use the search bar to filter todo items by name or status.


## Project Structure
- Backend  
    - models/Todos.js: Mongoose schema and model for todo items.  
    - models/Users.js: Mongoose schema and model for user accounts.  
    - routes/Todos.js: Express routes for CRUD operations on todo items.  
    - routes/User.js: Express routes for user authentication and registration.  
    - server.js: Entry point for the Express server.

- Frontend  
    - src/App.js: Main React component containing the application logic.  
    - src/App.css: CSS file for styling the application.  
    - components/Auth.js: Login form for user authentication.  
    - components/Register.js: Registration form for new users.  
    - components/Todo.js: Component to display and manage todo items.
      

## Sample Screenshot

### Frontend

![image](https://github.com/user-attachments/assets/6ed7987d-3f4c-46de-9e85-05f6231b28a5)

![image](https://github.com/user-attachments/assets/3d125772-220d-468c-913e-5f8510e40999)

![image](https://github.com/murlipatel1/todo-list-mern/assets/100035961/7924490c-694b-4325-b621-15013672032b)

![image](https://github.com/murlipatel1/todo-list-mern/assets/100035961/299195b4-2fe9-4f82-ba36-3e5980616f1c)

![image](https://github.com/murlipatel1/todo-list-mern/assets/100035961/6fc90061-b5d3-47f1-8c3f-317b4cb833a4)

### Backend

![image](https://github.com/murlipatel1/todo-list-mern/assets/100035961/b1a19d23-2591-4eb6-8bd8-6f802707a198)

### Database

Local Database
![image](https://github.com/murlipatel1/todo-list-mern/assets/100035961/529dce1a-f1eb-408a-bdb7-125ead1ebdd2)

AWS CLuster database
![image](https://github.com/user-attachments/assets/0bf68e80-e4b3-42e6-94b8-b3da4cf4b6b8)
