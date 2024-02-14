import { Document } from 'mongoose';
export interface User extends Document {
  readonly id: string;
  readonly email: string;
  readonly password: string;
  readonly name: string;
  readonly age: number;
  readonly bio: string;
  readonly price: number;
  readonly gender: string;
  readonly city: string;
  readonly state: string;
  readonly zipcode: string;
  readonly phone: string;
}
