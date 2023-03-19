import 'express-async-errors';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import xss from 'xss-clean';

import routes from '_routes';
import notFound from '_helpers/notFound';

import { errorHandler, responseHandler } from '_middleware';

const app: Express = express();

//Middleware
app.use(cors());
app.use(xss());
app.use(morgan('dev'));
app.set('trust proxy', 1);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get('/', (_: Request, res: Response) => res.send('Welcome to the api Server'));

app.use(responseHandler); //Middleware for handling response

app.use('/api/v1', routes);
app.use(notFound); //Not Found API
app.use(errorHandler); //Middleware for error handling

export default app;
