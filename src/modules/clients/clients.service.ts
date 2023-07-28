import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dtos/create-client.dto';
import { ClientRepository } from './repositories/clients.repository';
import { UpdateClientDto } from './dtos/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private clientsRepository: ClientRepository) {}

  async create(data: CreateClientDto) {
    return this.clientsRepository.create(data);
  }

  async findAll() {
    return this.clientsRepository.findAll();
  }

  async findOne(id: number) {
    const client = await this.clientsRepository.findOne(id);
    if (!client) throw new NotFoundException('User not found.');
    return client;
  }

  async findByEmail(email: string) {
    const client = await this.clientsRepository.findByEmail(email);
    if (!client) throw new NotFoundException('User not found.');
    return client;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const findClient = await this.clientsRepository.findOne(id);

    if (!findClient) {
      throw new NotFoundException('User Not found');
    }

    return this.clientsRepository.update(id, updateClientDto);
  }

  async remove(id: number) {
    const findUser = await this.clientsRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User Not found');
    }

    return this.clientsRepository.delete(id);
  }
}
