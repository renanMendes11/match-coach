import { Schema, Types } from 'mongoose';

export const ReviewSchema: Schema = new Schema({
  id: Types.UUID,
  clientId: Types.UUID,
  comment: String,
  stars: Number,
});
