import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactRepository) {}

  async create(data: CreateContactDto, clientId: number) {
    return this.contactRepository.create(data, clientId);
  }

  async findAll() {
    return this.contactRepository.findAll();
  }

  async findOne(id: number) {
    const contact = await this.contactRepository.findOne(id);
    if (!contact) throw new NotFoundException('Contact not found.');
    return contact;
  }

  async findByClientId(clientId: number) {
    const contacts = await this.contactRepository.findByClientId(clientId);
    if (!contacts) throw new NotFoundException('Contacts not found.');
    return contacts;
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    const findContact = await this.contactRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('User Not found');
    }

    return this.contactRepository.update(id, updateContactDto);
  }

  async remove(id: number) {
    const findContact = await this.contactRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact Not found');
    }

    return this.contactRepository.delete(id);
  }
}
