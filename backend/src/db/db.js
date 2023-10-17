import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// export const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialectOptions: {
//     ssl: true
//   }
// })

export const sequelize = new Sequelize(
  'MusicShop', 'postgres', process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);