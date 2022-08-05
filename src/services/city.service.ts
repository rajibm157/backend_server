import Models, { ICity } from '_models';
import { ICCity } from '_types';

export async function getCities(params: any): Promise<ICity[] | null> {
  return await Models.City.find(params);
}

export async function getCity(id: string): Promise<ICity | null> {
  return await Models.City.findById(id).exec();
}

export async function findCity(name: string): Promise<ICity | null> {
  return await Models.City.findOne({ name }).exec();
}

export async function createCity(params: ICCity): Promise<ICity | null> {
  return await Models.City.create(params);
}
