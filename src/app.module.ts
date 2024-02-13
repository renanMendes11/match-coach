import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoachModule } from './coach/coach.module';

@Module({
  imports: [CoachModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
