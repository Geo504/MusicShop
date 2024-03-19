import {DataTypes} from 'sequelize';
import {sequelize} from '../db/db.js';

import {Product} from './products.js';
import {User} from './user.js';


export const UserLikes = sequelize.define('userLikes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'product',
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
});


User.belongsToMany(Product, {
  through: UserLikes,
  foreignKey: 'userId',
  otherKey: 'productId'
});

Product.belongsToMany(User, {
  through: UserLikes,
  foreignKey: 'productId',
  otherKey: 'userId'
});