import { Schema, model, ObjectId } from 'mongoose';

export interface IUser {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  profile_pic?: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile_pic: String,
});

const User = model<IUser>('User', userSchema);

export default User;
