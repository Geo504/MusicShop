import {DataTypes} from 'sequelize';
import {sequelize} from '../db/db.js';

import {Product} from './products.js';

export const User = sequelize.define('users',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(25),
    allowNull: false,
    trim: true,
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: false,
    trim: true,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: true,
    defaultValue: null,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
})

User.hasMany(Product, {
  foreignKey: 'user_id',
  sourceKey: 'id',
  onDelete: 'CASCADE'
});

Product.belongsTo(User, {
  foreignKey: 'user_id',
  targetId: 'id',
  onDelete: 'CASCADE'
})