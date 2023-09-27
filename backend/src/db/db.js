import Sequelize from 'sequelize';

// const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/MusicShop')
export const sequelize = new Sequelize('MusicShop', 'postgres', 'root', {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});