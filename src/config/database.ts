import mongoose from 'mongoose';

export default async function connect(url: string) {
  return await mongoose.connect(url);
}
