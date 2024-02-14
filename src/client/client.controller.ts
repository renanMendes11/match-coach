import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientService } from '../../dist/client/client.service';
import { CreateClientDto } from '../../dist/client/dto/create-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  create(@Body() createReviewDto: CreateClientDto) {
    return this.clientService.create(createReviewDto);
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }
}
