import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '_config/config';
import { Unauthenticated } from '_errors';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) throw new Unauthenticated('No token provided.');
  const token = authHeader.split(' ')[1];
  try {
    const decodedToken = jwt.verify(token, config.jwt_secret) as JwtPayload;
    const { userId, email } = decodedToken;
    res.locals.user = { userId, email };
    next();
  } catch (error) {
    throw new Unauthenticated('Not authorized to access this route.');
  }
};
