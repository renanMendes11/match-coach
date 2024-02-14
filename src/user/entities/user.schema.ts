import { Schema, Types } from 'mongoose';

export const UserSchema: Schema = new Schema({
  id: Types.UUID,
  email: String,
  password: String,
  name: String,
  age: Number,
  bio: String,
  price: Number,
  gender: String,
  city: String,
  state: String,
  zipcode: String,
  phone: String,
});
