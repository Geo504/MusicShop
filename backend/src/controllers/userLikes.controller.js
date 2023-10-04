import { UserLikes } from "../models/userLikes.js";
import {Product} from '../models/products.js';



export const getUserLikes = async (req, res) => {
  try{
    const likedProducts = await UserLikes.findAll({
      where: { userId: req.user.id },
    });
    
    res.json(likedProducts.map(like => like.productId));
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}


export const getLikesProducts = async (req, res) => {
  try{
    const likedProducts = await UserLikes.findAll({
      where: { userId: req.user.id },
    });
    const LikedId = likedProducts.map(like => like.productId);

    const products = await Product.findAll({
      where: { id: LikedId },
    });
    res.json(products);
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}


export const updateUserLikes = async (req, res) => {
  const id = req.user.id
  const { productId } = req.body;
  try{
    const existingLike = await UserLikes.findOne({ where: { userId: id, productId } });

    if (existingLike) {
      await existingLike.destroy();
    }
    if (!existingLike) {
      await UserLikes.create({ userId: id, productId });
    }

    const likedProducts = await UserLikes.findAll({
      where: { userId: id },
    });
    
    res.json(likedProducts.map(like => like.productId));
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}