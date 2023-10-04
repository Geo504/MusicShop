import {DataTypes} from 'sequelize';
import {sequelize} from '../db/db.js';

import {Product} from './products.js';
import {User} from './users.js';


export const UserLikes = sequelize.define('userLikes', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
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