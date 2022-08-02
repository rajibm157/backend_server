import jwt from 'jsonwebtoken';
import config from '_config/config';
import Models, { IUser } from '_models';

export async function getUser(email: string): Promise<IUser | null> {
  return await Models.User.findOne({ email });
}

export async function findUser(id: string): Promise<IUser | null> {
  return await Models.User.findById(id).exec();
}

export async function createToken(user: IUser): Promise<string> {
  const token = jwt.sign({ userId: user._id, email: user.email }, config.jwt_secret, {
    expiresIn: config.token_expiration,
  });
  return await token;
}
