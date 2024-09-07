/**
 * error handler middleware
 */
import { NextFunction, Request, Response } from 'express';
import HttpError from '../utils/HttpError';

export default async function errorHandler(err: HttpError, req: Request, res: Response, next: NextFunction) {
  try {
    const { message, statusCode } = err;
    console.error(err);
    res.status(statusCode).json(message);
    next();
  } catch (error) {
    console.error(error);
    return next(new HttpError((error as Error).message, 500));
  }
}
