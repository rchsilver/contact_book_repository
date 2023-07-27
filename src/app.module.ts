import { Module } from '@nestjs/common';
// import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { ClientModule } from './modules/clients/clients.module';
import { ContactsModule } from './modules/contacts/contacts.module';

@Module({
  imports: [ClientModule, ContactsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
