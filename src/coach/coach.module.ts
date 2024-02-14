import { Module } from '@nestjs/common';
import { DatabaseModule } from '../config/database/database.module';
import { CoachController } from '../../dist/coach/coach.controller';
import { CoachService } from '../../dist/coach/coach.service';
import { coachProviders } from './entities/coach.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CoachController],
  providers: [CoachService, ...coachProviders],
})
export class CoachModule {}
