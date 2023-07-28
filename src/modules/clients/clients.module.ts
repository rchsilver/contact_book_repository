import { Module } from '@nestjs/common';
import { ClientsControllers } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientRepository } from './repositories/clients.repository';
import { ClientPrismaRepository } from './repositories/prisma/users.prisma.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ContactsModule } from '../contacts/contacts.module';
@Module({
  imports: [ContactsModule],
  controllers: [ClientsControllers],
  providers: [
    ClientsService,
    PrismaService,
    {
      provide: ClientRepository,
      useClass: ClientPrismaRepository,
    },
  ],
  exports: [ClientsService],
})
export class ClientModule {}
