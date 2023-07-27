import { CreateContactDto } from '../../dto/create-contact.dto';
import { ContactRepository } from '../contacts.repository';
import { Contact } from '../../entities/contact.entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ContactsPrismaRepository implements ContactRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContactDto): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, {
      ...data,
    });
    const newContact = await this.prisma.contact.create({
      data: { ...contact },
    });
    return newContact;
    // return plainToInstance(Client, newClient);
  }

  async findAll(): Promise<Contact[]> {
    const users = await this.prisma.contact.findMany();
    return users;
  }

  async findOne(id: number): Promise<Contact> {
    const user = await this.prisma.contact.findUnique({
      where: { id },
    });
    return user;
  }
}
