import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import SequelizeStoreInit from 'connect-session-sequelize';
const SequelizeStore = SequelizeStoreInit(session.Store);

import usersRouter from './routes/user.js';
import productsRouter from './routes/products.js';
import userLikes from './routes/userLikes.routes.js';
import './libs/passport.js';
import { sequelize } from './db/db.js';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
  cookie: {
    // secure: true,
    sameSite: 'none'
  }
}));
app.use(passport.initialize());
app.use(passport.session());


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