import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import pg from "pg"
dotenv.config();

// Ensure process.env variables are defined before using them
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbDialect = process.env.DB_DIALECT;

if (!dbName || !dbUser || !dbPassword || !dbHost || !dbDialect) {
  throw new Error('One or more environment variables are not defined.');
}

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialectModule: pg,
  dialect: dbDialect as 'postgres',
  logging: false,
});

export { sequelize };
