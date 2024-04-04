import jwt from 'jsonwebtoken';

export const authRequired = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader) {
    res.setHeader('Authorization', authHeader);
  }
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  })
}