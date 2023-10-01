import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import usersRouter from './routes/users.routes.js';
import productsRouter from './routes/products.routes.js';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());



app.use(cors({
  origin: process.env.FRONTEND_URL, credentials: true
}));

app.use('/api', usersRouter);
app.use('/api', productsRouter);

export default app;