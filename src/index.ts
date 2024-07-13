import express from 'express';
import { sequelize } from './config/database'; // Import your Sequelize instance
import userRoutes from './routes/userRoutes';
import greetingRoutes from './routes/greetingRoutes';
import path from 'path';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/greetings', greetingRoutes);


// Serve static files from the views directory
app.use(express.static(path.join(__dirname, 'views')));

// Handle all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Function to sync database
const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to synchronize the database:', error);
  }
};


syncDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`API documentation is available at http://localhost:${port}/index.html`);
  });
}).catch((error) => {
  console.error('Error syncing database:', error);
});
