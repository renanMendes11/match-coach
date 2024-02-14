import { Connection } from 'mongoose';
import { CoachSchema } from './coach.schema';

export const coachProviders = [
  {
    provide: 'COACH_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Coach', CoachSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
