import { CreateClientDto } from '../../dtos/create-client.dto';
import { Client } from '../../entities/clients.entitie';
import { ClientRepository } from '../clients.repository';

export class ClientsInMemoryRepository implements ClientRepository {
  private database: Client[] = [];

  async create(data: CreateClientDto): Promise<Client> {
    const newClient = new Client();
    Object.assign(newClient, {
      ...data,
    });
    this.database.push(newClient);
    return newClient;
  }

  async findAll(): Promise<Client[]> {
    return this.database;
  }

  async findOne(id: number): Promise<Client> {
    const client = this.database.find((client) => client.id === id);
    return client;
  }
}
