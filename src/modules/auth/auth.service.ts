import { Injectable } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private clientService: ClientsService,
    private jwtService: JwtService,
  ) {}

  async valitadeClient(clientEmail: string, clientPasseword: string) {
    const client = await this.clientService.findByEmail(clientEmail);
    if (client) {
      const passwordMatch = await compare(clientPasseword, client.password);
      if (passwordMatch) return { email: client.email };
    }
    return null;
  }
  async login(email: string) {
    const client = await this.clientService.findByEmail(email);
    return {
      token: this.jwtService.sign({ email }, { subject: client.id + '' }),
      id: client.id,
      fullName: client.fullName,
    };
  }
}
