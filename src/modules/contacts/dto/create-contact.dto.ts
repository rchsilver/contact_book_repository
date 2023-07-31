import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateContactDto {
  readonly id: number;

  @ApiProperty({
    description: 'Nome do contato',
    default: 'Kenzinho da Silva Academy',
  })
  @IsString()
  fullName: string;

  @ApiProperty({
    description: 'Email do contato',
    default: 'kezninho@academy.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Telefone do contato', default: '(xx)xxxx-xxxx' })
  @IsString()
  phone: string;

  @IsString()
  @IsDate()
  @IsOptional()
  registrationDate: string | Date | null | undefined;

  @ApiProperty({
    description: 'Id do usuário',
  })
  readonly clientId: number;
}
