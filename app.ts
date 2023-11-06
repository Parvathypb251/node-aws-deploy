import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { validateJSONSyntax, validateContentType, defaultErrorHandler } from './middleware/errors';
import router from './router';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(validateJSONSyntax);
app.use(router);

export default app;
