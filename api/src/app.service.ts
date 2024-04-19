import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return { message: 'Hello World!' };
  }

  getGoodbye(): { message: string } {
    return { message: 'Goodbye World!' };
  }

  getDate(): { date: string } {
    return { date: new Date().toDateString() };
  }
}
