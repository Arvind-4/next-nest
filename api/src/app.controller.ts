import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello() {
    return this.appService.getHello();
  }

  @Get('goodbye')
  getGoodbye() {
    return this.appService.getGoodbye();
  }

  @Get('date')
  getDate() {
    return this.appService.getDate();
  }
}
