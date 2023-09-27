import { Op } from 'sequelize';
import {sequelize} from '../db/db.js';

import { User } from "../models/users.js";
import { Product } from "../models/products.js";
import { Tag } from '../models/tags.js';

export const getProducts = async (req, res) => {
  try{
    const products = await Product.findAll();
    res.json(products);
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const getProduct = async (req, res) => {
  try{
    const product = await Product.findByPk(req.params.id,{
      include: [
        {
          model:Tag,
          attributes: ['tag_name'],
          through: {attributes: []}
        },
        {
          model: User,
          attributes: ['username']
        },
      ]
    });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const createProduct = async (req, res) => {
  const { name, price, description, img, tags } = req.body;

  try{
    const newProduct = await Product.create({
      name,
      price,
      description,
      img,
      user_id: req.user.id,
    });
    if (tags){
      const newProductTags = await Promise.all(tags.map(async (tag) => {
        const [newTag] = await Tag.findOrCreate({
          where: {tag_name: tag},
          defaults: {tag_name: tag}
        })
        await newProduct.addTag(newTag);
        return{ tag_name: newTag.tag_name};
      }));

      newProduct.setDataValue('tags', newProductTags);
    }
    res.json(newProduct);
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const updateProduct = async (req, res) => {
  const { name, price, description, img, tags } = req.body;
  try{
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.update({name, price, description, img});

    if (tags) {
      const newProductTags = await Promise.all(tags.map(async (tag) => {
        const [newTag] = await Tag.findOrCreate({
          where: { tag_name: tag },
          defaults: { tag_name: tag },
        });
        await product.addTag(newTag);
        return {tag_name: newTag.tag_name};
      }));
      product.setDataValue('tags', newProductTags);
    }

    const tagsToRemove = await product.getTags({
      where: {
        tag_name: { [Op.notIn]: tags },
      },
    });
    await product.removeTags(tagsToRemove);

    res.json(product);
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const t = await sequelize.transaction();
  try{
    const product = await Product.findByPk(id, { transaction: t });
    if (!product) {
      await t.rollback();
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.removeTags(product.tags, { transaction: t });
    await product.destroy({ transaction: t });

    const orphanTags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: { attributes: [] },
        },
      ],
      transaction: t,
    });

    const tagsToRemove = orphanTags.filter((tag) => tag.products.length === 0);

    if (tagsToRemove.length > 0) {
      await Tag.destroy({
        where: { id: tagsToRemove.map((tag) => tag.id) },
        transaction: t,
      });
    }

    await t.commit();
    res.sendStatus(204);
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}