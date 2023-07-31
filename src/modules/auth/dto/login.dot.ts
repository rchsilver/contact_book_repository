import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Email do usuário',
    default: 'churros@churros.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Senha do usuário', default: '12345678' })
  @IsString()
  password: string;
}
