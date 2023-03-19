import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const notFound = (_: Request, res: Response) => {
  res.error({ status: StatusCodes.NOT_FOUND, message: 'Route does not exist' });
};

export default notFound;
