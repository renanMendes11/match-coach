import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoachModule } from './coach/coach.module';
import { ClientModule } from './client/client.module';
import { UserModule } from './user/user.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [CoachModule, ClientModule, UserModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
