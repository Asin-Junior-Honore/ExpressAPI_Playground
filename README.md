
# ExpressAPI Playground

Welcome to ExpressAPI Playground! This project serves as a playground for developers to experiment with an Express.js API setup integrated with Sequelize ORM, PostgreSQL database, and Swagger UI for API documentation.

## Features

- **Express.js Framework**: Fast, unopinionated, minimalist web framework for Node.js.
- **Sequelize ORM**: Promise-based Node.js ORM for PostgreSQL, MySQL, SQLite, and more.
- **PostgreSQL Database**: Robust, open-source relational database system.
- **Swagger UI**: Elegant API documentation with Swagger UI to visualize and interact with the API resources, including an ERD (Entity-Relationship Diagram).

## Installation

To get started with ExpressAPI Playground, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <repository_url>
   cd ExpressAPI-Playground
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and define the following variables:

   ```plaintext
   PORT=3000
   DATABASE_URL=postgresql://username:password@localhost:5432/database_name
   ```

   Replace `username`, `password`, and `database_name` with your PostgreSQL credentials.

4. **Run database migrations**:

   Ensure your PostgreSQL server is running, then run:

   ```bash
   npm run migrate
   ```

   This will synchronize the database schema using Sequelize migrations.

5. **Start the server**:

   ```bash
   npm start
   ```

   The server will start at `http://localhost:3000`.

## Usage

- **API Endpoints**:

  - **Users**:
    - `GET /api/users`: Retrieve all users.
    - `GET /api/users/:id`: Retrieve a user by ID.
    - `POST /api/users`: Create a new user.
    - `PUT /api/users/:id`: Update a user by ID.
    - `DELETE /api/users/:id`: Delete a user by ID.

  - **Greetings**:
    - `GET /api/greetings`: Retrieve all greetings.
    - `GET /api/greetings/:id`: Retrieve a greeting by ID.
    - `POST /api/greetings`: Create a new greeting.
    - `PUT /api/greetings/:id`: Update a greeting by ID.
    - `DELETE /api/greetings/:id`: Delete a greeting by ID.

- **API Documentation**:

  Swagger UI is available at `http://localhost:3000/api-docs` to explore and test the endpoints interactively. The Swagger UI also includes an Entity-Relationship Diagram (ERD) that visually represents the database schema, which is different from the main repository documentation.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please create an issue or submit a pull request.
