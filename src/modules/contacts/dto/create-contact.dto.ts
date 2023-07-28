import { IsString } from 'class-validator';

export class CreateContactDto {
  readonly id: number;

  @IsString()
  fullName: string;
  email: string;
  phone: string;
  registrationDate: Date;
  clientId: number;
}
