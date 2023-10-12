import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "../models/users.js";
import { createAccessToken } from "../libs/jwt.js";

export const getUsers = async (req, res) => {
  try{
    const users = await User.findAll();
    res.json(users);
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const login = async (req, res) => {
  const { email, password } = req.body;
  try{
    const user = await User.findOne({
      where: { email: email } 
    });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    else {
      const passwordCorrect = await bcrypt.compare(password, user.password);
      if (!passwordCorrect) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      const token = await createAccessToken({ id: user.id });
      res.cookie('token', token, { 
        sameSite: 'none', 
        secure: true, 
        httpOnly: true,
        path: '/',
        domain: `.${process.env.FRONTEND_URL}`,
      });
      res.json({
        id: user.id,
        username: user.username,
        email: user.email,
      });
    }
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const createUsers = async (req, res) => {
  const { username, email, password } = req.body;
  try{
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: passwordHash,
    })

    const token = await createAccessToken({ id: newUser.id });
    res.cookie('token', token, { sameSite: 'none', secure: true });
    res.json({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
    });
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const logout = (req, res) => {
  res.clearCookie('token');
  res.sendStatus(204);
}


export const verifyToken = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try{
    jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      const user = await User.findByPk(decoded.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({
        id: user.id,
        username: user.username,
        email: user.email,
      });
    })
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const profile = async (req, res) => {
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


// export const putUsers = async (req, res) => {
//   try{
//     const { id } = req.params;
//     const { is_active } = req.body;

//     const user = await User.findByPk(id)
//     user.is_active = is_active;

//     await user.save();
//     res.json(user);
//   }
//   catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }


export const deleteUser = async (req, res) => {
  try{
    console.log(req.params)
    const { id } = req.params;
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