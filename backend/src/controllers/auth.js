import bcrypt from "bcryptjs";
import passport from "passport";

import { User } from "../models/user.js";
import { createAccessToken } from "../libs/jwt.js";


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
      res.set('Authorization', 'Bearer ' + token);
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



export const googleCallback = passport.authenticate('google', { 
  successRedirect: `${process.env.FRONTEND_URL}?googleAuth=true`,
  failureRedirect: `${process.env.FRONTEND_URL}/login`,
});

export const loginSuccess = async (req, res) => {
  try {
    if (req.user) {
      const googleUser = req.user._json;

      const [user, created] = await User.findOrCreate({
        where: { email: googleUser.email },
        defaults: {
          username: googleUser.given_name,
          is_active: googleUser.email_verified,
        }
      });
      
      const token = await createAccessToken({ id: user.id });
      res.set('Authorization', 'Bearer ' + token);
      res.status(200).json({
        id: user.id,
        username: user.username,
        email: user.email,
      });
    } else {
      res.status(403).json({ message: 'Not Authorized' });
    }
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// export const verifyToken = (req, res) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
//   try{
//     jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) => {
//       if (err) {
//         return res.status(401).json({ message: 'Invalid token' });
//       }
//       const user = await User.findByPk(decoded.id);
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
//       res.json({
//         id: user.id,
//         username: user.username,
//         email: user.email,
//       });
//     })
//   }
//   catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }