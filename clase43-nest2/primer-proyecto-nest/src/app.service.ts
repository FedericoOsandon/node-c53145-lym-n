import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Binevenido a la clase de nestjs 1!';
  }
}
