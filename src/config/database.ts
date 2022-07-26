import mongoose from 'mongoose';

const connection = (url: string) => {
  return mongoose.connect(url);
};

export default connection;
