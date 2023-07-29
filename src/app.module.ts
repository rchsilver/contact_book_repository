import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { ClientModule } from './modules/clients/clients.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ClientModule, ContactsModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
