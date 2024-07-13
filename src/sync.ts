import { sequelize } from './config/database';

const syncDatabase = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true }); // For development only. Use `sync` without `force` in production.
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Unable to synchronize the database:', error);
    } finally {
        await sequelize.close();
    }
};

syncDatabase();
