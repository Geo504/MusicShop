import {DataTypes} from 'sequelize';
import {sequelize} from '../db/db.js';


export const Tag = sequelize.define('tags',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tag_name: {
    type: DataTypes.STRING(25),
    allowNull: false,
    trim: true,
    unique: true
  }
})