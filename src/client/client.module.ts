import { Module } from '@nestjs/common';
import { DatabaseModule } from '../config/database/database.module';
import { clientProviders } from './entities/client.providers';
import { ClientService } from '../../dist/client/client.service';
import { ClientController } from '../../dist/client/client.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientController],
  providers: [ClientService, ...clientProviders],
})
export class ClientModule {}
