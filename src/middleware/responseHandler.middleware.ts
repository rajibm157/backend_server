import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

export const responseHandler = (_: Request, res: Response, next: NextFunction) => {
  /**
   * (default status 200)
   * Success response
   */
  res.success = function ({ result = {}, status = StatusCodes.OK, message = '' }) {
    return res.status(status).json({
      status: true,
      data: result,
      message,
    });
  };

  /**
   * Custom error response
   */
  res.error = function ({ errors = {}, status, message = '', result = {} }) {
    return res.status(status || errors?.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: false,
      data: result,
      errors: errors.errors || errors,
      message,
    });
  };

  next();
};
