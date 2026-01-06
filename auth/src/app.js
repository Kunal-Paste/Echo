import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoute from './router/auth.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use('/api/auth', authRoute);

export default app;