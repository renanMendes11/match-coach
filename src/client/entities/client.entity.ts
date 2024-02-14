import { Document } from 'mongoose';
import { User } from '../../user/entities/user.entity';
export interface Client extends Document {
  readonly id: string;
  readonly user: User;
}
