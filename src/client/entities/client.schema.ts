import { Schema, Types } from 'mongoose';
import { UserSchema } from '../../user/entities/user.schema';

export const ClientSchema: Schema = new Schema({
  id: Types.UUID,
  user: UserSchema,
});
