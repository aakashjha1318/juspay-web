import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import PaymentRoutes from '../routes/payments';
import errorHandler from '../middlewares/errorHandler';
import HttpError from '../utils/HttpError';

const app = express();

app.disable('x-powered-by');

app.use(
  cors({
    origin: '*',
    allowedHeaders: '*',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/payments', PaymentRoutes);

app.use('*', async (_: Request, __: Response, next: NextFunction) => {
  return next(new HttpError('Not Found', 404));
});

app.use(errorHandler);

export default app;
