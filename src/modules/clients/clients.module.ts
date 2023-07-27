import { Module } from '@nestjs/common';
import { ClientsControllers } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientRepository } from './repositories/clients.repository';
import { ClientPrismaRepository } from './repositories/prisma/users.prisma.repository';
@Module({
  controllers: [ClientsControllers],
  providers: [
    ClientsService,
    {
      provide: ClientRepository,
      useClass: ClientPrismaRepository,
    },
  ],
})
export class ClientModule {}
