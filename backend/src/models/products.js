import {DataTypes} from 'sequelize';
import {sequelize} from '../db/db.js';

import { Tag } from './tags.js';

export const Product = sequelize.define('products',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    trim: true
  },
  price: {
    type: DataTypes.STRING(15),
    allowNull: false,
    trim: true
  },
  description: {
    type: DataTypes.STRING(600),
    allowNull: false,
    trim: true
  },
  category: {
    type: DataTypes.STRING(35),
    allowNull: false,
    trim: true
  },
  img: {
    type: DataTypes.STRING(255),
    allowNull: false,
    trim: true
  }
})


Product.belongsToMany(Tag, {
  through: 'ProductTag', 
  onDelete: 'CASCADE'
});
Tag.belongsToMany(Product, {
  through: 'ProductTag',
  onDelete: 'CASCADE'
});
