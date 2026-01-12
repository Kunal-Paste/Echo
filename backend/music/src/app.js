import express from 'express';
import cookieParser from 'cookie-parser';
import musicRoute from './routes/music.routes.js'


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/music', musicRoute);

export default app;