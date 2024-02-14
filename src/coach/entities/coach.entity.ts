import { Document } from 'mongoose';
import { User } from '../../user/entities/user.entity';
import { Review } from '../../review/entities/review.entity';
export interface Coach extends Document {
  readonly id: string;
  readonly user: User;
  readonly reviews: [Review];
  readonly trainingLocations: [string];
  readonly areaExp: [string];
  readonly medicalConditionExp: [string];
  readonly populationExp: [string];
}
