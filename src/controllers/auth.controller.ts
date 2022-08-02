import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { BadRequest } from '_helpers/errors';
import { authService } from '_services';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await authService.getUser(email);
  if (!user) throw new BadRequest('Invalid credentials.');

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) throw new BadRequest('Invalid credentials.');

  const token = await authService.createToken(user);
  res.status(StatusCodes.OK).json({ user, token });
};
