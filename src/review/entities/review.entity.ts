import { Document } from 'mongoose';
export interface Review extends Document {
  readonly id: string;
  readonly clientId: string;
  readonly comment: string;
  readonly stars: number;
}
