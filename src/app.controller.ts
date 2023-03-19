import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  // constructor(private altcoinsRepository: AltcoinsRepository) {}
  @Get()
  getHello() {
    return { message: 'Olá, Mundo! Experimente a rota /altcoins' };
  }
}
