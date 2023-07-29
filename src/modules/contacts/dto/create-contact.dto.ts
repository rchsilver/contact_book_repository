import { IsDate, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateContactDto {
  readonly id: number;

  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  @IsDate()
  @IsOptional()
  registrationDate: string | Date | null | undefined;

  readonly clientId: number;
}
