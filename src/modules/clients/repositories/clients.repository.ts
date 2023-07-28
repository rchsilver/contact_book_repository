import { CreateClientDto } from '../dtos/create-client.dto';
import { UpdateClientDto } from '../dtos/update-client.dto';
import { Client } from '../entities/clients.entitie';

export abstract class ClientRepository {
  abstract create(data: CreateClientDto): Promise<Client>;
  abstract findAll(): Promise<Client[]>;
  abstract findOne(id: number): Promise<Client>;
  abstract findByEmail(email: string): Promise<Client>;
  abstract update(id: number, data: UpdateClientDto): Promise<Client>;
  abstract delete(id: number): Promise<void>;
}
