import { Schema, model, ObjectId } from 'mongoose';

export interface ICity {
  _id: ObjectId;
  name: string;
  description?: string;
  status: 'A' | 'I' | 'D';
}

const citySchema = new Schema<ICity>(
  {
    name: { type: String, required: [true, 'Name must be provide.'] },
    description: String,
    status: { type: String, required: [true, 'Status must be provide.'], default: 'A' },
  },
  { timestamps: true },
);

const City = model<ICity>('City', citySchema);

export default City;
