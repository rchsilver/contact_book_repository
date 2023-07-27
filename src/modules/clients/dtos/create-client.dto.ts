import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  // readonly id: number;
  @IsString()
  fullName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @IsString()
  registrationDate: string | Date;
}
