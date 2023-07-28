import { ConflictException, Injectable } from '@nestjs/common';
import { ClientRepository } from '../clients.repository';
import { CreateClientDto } from '../../dtos/create-client.dto';
import { Client } from '../../entities/clients.entitie';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ClientPrismaRepository implements ClientRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateClientDto): Promise<Client> {
    const client = new Client();
    Object.assign(client, {
      ...data,
    });
    await this.findByEmail(data.email);
    const newClient = await this.prisma.client.create({
      data: { ...client },
    });

    return plainToInstance(Client, newClient);
  }

  async findAll(): Promise<Client[]> {
    const users = await this.prisma.client.findMany();
    return plainToInstance(Client, users);
  }

  async findOne(id: number): Promise<Client> {
    const user = await this.prisma.client.findUnique({
      where: { id },
    });
    return plainToInstance(Client, user);
  }

  async findByEmail(email: string): Promise<Client> {
    const user = await this.prisma.client.findUnique({
      where: { email },
    });
    if (user) throw new ConflictException('Email already exists!');

    return user;
  }

  async update(id: number, data: CreateClientDto): Promise<Client> {
    const user = await this.prisma.client.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Client, user);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.client.delete({
      where: { id },
    });
  }
}
