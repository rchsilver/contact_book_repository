// import { randomUUID } from 'crypto';
import { Exclude } from 'class-transformer';

export class Client {
  readonly id: number;
  fullName: string;
  email: string;
  phone: string;
  registrationDate: string | Date | null | undefined;
  @Exclude()
  password: string;

  //   constructor() {
  //     this.id = randomUUID();
  //   }
}
