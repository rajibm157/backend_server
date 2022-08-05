import { Schema, model, ObjectId } from 'mongoose';

export interface IUser {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  profile_pic?: string;
  status: 'A' | 'I' | 'D';
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: [true, 'Name must be provide.'] },
    email: { type: String, required: [true, 'Email must be provide.'] },
    password: { type: String, required: [true, 'Password must be provide.'] },
    profile_pic: String,
    status: { type: String, required: [true, 'Status must be provide.'], default: 'A' },
  },
  { timestamps: true },
);

const User = model<IUser>('User', userSchema);

export default User;
