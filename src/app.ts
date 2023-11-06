import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './router';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(router);

export default app;
