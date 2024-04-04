import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import usersRouter from './routes/user.js';
import productsRouter from './routes/products.js';
import userLikes from './routes/userLikes.routes.js';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());


app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  exposedHeaders: ['Authorization'],
  allowedHeaders: ['Authorization', 'Content-Type'],
}));

app.use('/api', usersRouter);
app.use('/api', productsRouter);
app.use('/api', userLikes);

export default app;