import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';
import { ISignup } from '_types';
import { BadRequest } from '_helpers/errors';
import { authService } from '_services';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await authService.getUser(email);
    if (!user) throw new BadRequest('Invalid credentials.');

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) throw new BadRequest('Invalid credentials.');

    const token = await authService.createToken(user);

    res.status(StatusCodes.OK).json({ user, token, message: 'You have successfully login.' });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

export const register = async (req: Request, res: Response) => {
  const { email, password, ...rest } = req.body as ISignup;
  try {
    const user = await authService.getUser(email);
    if (user) throw new BadRequest('Email already exist.');

    const hashPassword: string = await bcrypt.hash(password, 10);

    const data = await authService.createUser({ ...rest, email, password: hashPassword });

    res.status(StatusCodes.CREATED).send({ user: data, message: 'You have successfully register.' });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

export const profile = async (req: Request, res: Response) => {
  try {
    const data = await authService.findUser(res.locals.user?.id);
    res.status(StatusCodes.OK).send({ user: data });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
