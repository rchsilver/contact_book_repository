import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dtos/create-client.dto';
import { UpdateClientDto } from './dtos/update-client.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('clients')
export class ClientsControllers {
  constructor(private clientsService: ClientsService) {}

  @Post()
  create(@Body() data: CreateClientDto) {
    return this.clientsService.create(data);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: number) {
    return this.clientsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() updateUserDto: UpdateClientDto) {
    return this.clientsService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: number) {
    return this.clientsService.remove(id);
  }
}
