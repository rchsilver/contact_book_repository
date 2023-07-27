export class CreateContactDto {
  readonly id: number;
  fullName: string;
  email: string;
  phone: string;
  registrationDate: Date;
  clientId: number;
}
