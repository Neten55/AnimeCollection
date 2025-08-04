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
anime-collection/
│
├── app.js                       # Main Express app
├── .env                         # Environment variables
├── .gitignore                   # Ignore node_modules, .env, etc.
├── package.json                 # NPM config & dependencies
├── README.md                    # (Optional) Project overview
│
├── config/
│   └── db.js                    # PostgreSQL connection
│
├── controllers/
│   ├── adminController.js       # Admin: suspend/unsuspend users, logs
│   ├── animeController.js       # CRUD logic for anime
│   └── authController.js        # Register, login, logout
│
├── middleware/
│   └── auth.js                  # Role/auth route protection
│
├── models/
│   ├── animeModel.js            # Anime DB queries
│   ├── logModel.js              # Log tracking
│   └── userModel.js             # User DB queries + password handling
│
├── public/
│   ├── css/
│   │   └── styles.css           # Styling for the entire app
│   ├── js/
│   │   └── scripts.js           # JS for delete confirmation etc.
│   └── images/
│       └── logo.png             # (Optional) Logo or background image
│
├── routes/
│   ├── adminRoutes.js           # Admin panel routes
│   ├── animeRoutes.js           # Anime CRUD routes
│   └── authRoutes.js            # Auth routes (login, register)
│
├── views/
│   ├── partials/
│   │   ├── header.ejs           # Top layout (title, nav)
│   │   └── footer.ejs           # Footer layout
│   │
│   ├── anime/
│   │   ├── list.ejs             # List of user's anime collection
│   │   └── form.ejs             # Add/edit form
│   │
│   ├── auth/
│   │   ├── login.ejs            # Login page
│   │   └── register.ejs         # Register page
│   │
│   ├── admin/
│   │   ├── users.ejs            # Admin dashboard: user table
│   │   └── logs.ejs             # Admin log history
│   │
│   └── dashboard.ejs            # User dashboard after login
```

## Setup Instructions
1. **Clone the repository**
   ```
   git clone https://github.com/Neten55/AnimeCollection.git
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
   npm run start
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