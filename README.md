# Anime Collection

## Project Overview
The Anime Collection project is a web application that allows users to manage their anime collection with user authentication and CRUD operations. Built using Express.js and PostgreSQL, this application follows the MVC architecture to separate concerns and enhance maintainability.

## Features
- User registration and login
- Create, read, update, and delete (CRUD) operations for anime entries
- User authentication and session management
- Responsive design using EJS templates

## File Structure
```
anime-collection
├── src
│   ├── controllers
│   │   ├── animeController.js
│   │   └── authController.js
│   ├── models
│   │   ├── animeModel.js
│   │   └── userModel.js
│   ├── routes
│   │   ├── animeRoutes.js
│   │   └── authRoutes.js
│   ├── views
│   │   ├── anime.ejs
│   │   ├── login.ejs
│   │   └── register.ejs
│   ├── config
│   │   └── db.js
│   ├── middleware
│   │   └── authMiddleware.js
│   └── app.js
├── public
│   └── index.html
├── package.json
├── .env
└── README.md
```

## Setup Instructions
1. **Clone the repository**
   ```
   git clone <repository-url>
   cd anime-collection
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure the database**
   - Create a PostgreSQL database for the application.
   - Update the `.env` file with your database connection details.

4. **Run the application**
   ```
   npm start
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:3000`.

## Usage
- **Register**: Navigate to the registration page to create a new account.
- **Login**: Use your credentials to log in and access your anime collection.
- **Manage Anime**: Once logged in, you can add, view, update, or delete anime entries.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.