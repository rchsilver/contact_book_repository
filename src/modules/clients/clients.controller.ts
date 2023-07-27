import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dtos/create-client.dto';
import { UpdateClientDto } from './dtos/update-client.dto';

@Controller('clients')
export class ClientsControllers {
  constructor(private clientsService: ClientsService) {}

  @Post()
  create(@Body() data: CreateClientDto) {
    return this.clientsService.create(data);
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clientsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateClientDto) {
    return this.clientsService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clientsService.remove(id);
  }
}
