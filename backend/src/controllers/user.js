import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

import { User } from "../models/user.js";


export const createUser = async (req, res) => {
  try{
    const ALLOWED_KEYS = new Set(['username', 'email', 'password']);
    const keys = Object.keys(req.body);
    if (!keys.every(key => ALLOWED_KEYS.has(key))) {
      return res.status(400).json({ message: 'Invalid keys provided' });
    }

    const { username, email, password } = req.body;
    
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: passwordHash,
    })

    res.json({message: 'User created successfully'});
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const getUser = async (req, res) => {
  try{
    const user = await User.findByPk(req.user.id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json({
      id: user.id,
      username: user.username,
      email: user.email,
    });
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const updateUser = async (req, res) => {
  try{
    const ALLOWED_KEYS = new Set(['username', 'password']);
    const keys = Object.keys(req.body);
    if (!keys.every(key => ALLOWED_KEYS.has(key))) {
      return res.status(400).json({ message: 'Invalid keys provided' });
    }
    

    const user = await User.findByPk(req.user.id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (req.body.username) {
      user.username = req.body.username;
    }
    if (req.body.password) {
      const passwordHash = await bcrypt.hash(req.body.password, 10);
      user.password = passwordHash;
    }

    await user.save();
    res.json({
      username: user.username,
    });
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const deleteUser = async (req, res) => {
  try{
    const id = req.user.id;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await User.destroy({
      where: {
        id
      }
    })
    res.clearCookie('token');
    res.sendStatus(204);
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}