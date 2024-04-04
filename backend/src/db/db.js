import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
let sequelize;

if (process.env.ENVIRONMENT === 'production') {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: true
    }
  });
} else {
  sequelize = new Sequelize(
    'MusicShop', 'postgres', process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      dialect: 'postgres'
    }
  );
}

export { sequelize };