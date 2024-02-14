import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { DatabaseModule } from '../config/database/database.module';
import { reviewProviders } from './entities/review.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ReviewController],
  providers: [ReviewService, ...reviewProviders],
})
export class ReviewModule {}
