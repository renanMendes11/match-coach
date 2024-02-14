import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://renanmendes049:<r0qkuuAgBJ9Idlh2>@cluster0.btczolg.mongodb.net/?retryWrites=true&w=majority',
      ),
  },
];
