import { ApiProperty } from '@nestjs/swagger';
import { Contact } from '@prisma/client';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @ApiProperty({
    description: 'Nome do usuário',
    default: 'Kenzinho da Silva Academy',
  })
  @IsString()
  fullName: string;

  @ApiProperty({
    description: 'Email do usuário',
    default: 'churros@churros.com',
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Telefone do usuário', default: '(xx)xxxx-xxxx' })
  @IsString()
  phone: string;

  @ApiProperty({ description: 'Senha do usuário', default: '12345678' })
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @IsString()
  @IsDate()
  @IsOptional()
  registrationDate: string | Date;
}
