import { Controller, Get } from '@nestjs/common';
import { Public } from './decorators/public';

@Controller()
export class AppController {
  // constructor(private altcoinsRepository: AltcoinsRepository) {}
  @Get()
  @Public()
  getHello() {
    return { message: 'Olá, Mundo! Experimente a rota /altcoins' };
  }
}
