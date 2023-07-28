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
  }

  async findAll(): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany();

    return contacts;
  }

  async findOne(id: number): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
    });

    return contact;
  }

  async update(id: number, data: CreateContactDto): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });

    return contact;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }
}
