import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';

export const errorHandler = (err: any, _req: Request, res: Response) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    error: {
      message: err.message || 'Something went wrong, please try again.',
    },
  };

  if (err.name === 'ValidationError') {
    customError.error.message = Object.values(err.errors)
      .map((item: any) => item.message)
      .join(', ');
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.code && err.code === 11000) {
    customError.error.message = `Duplicate value entered for ${Object.keys(
      err.keyValue,
    )} field, please choose another value`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.name === 'CastError') {
    customError.error.message = `No item found with id : ${err.value}`;
    customError.statusCode = StatusCodes.NOT_FOUND;
  }

  return res.status(customError.statusCode).json({ error: customError.error });
};
