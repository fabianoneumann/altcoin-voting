import { Controller, Body, Post, Get, UseGuards } from '@nestjs/common';
import { Public } from 'src/decorators/public';
import { LoginUserBody } from 'src/dtos/login-user-body';
import { AuthService } from './auth.service';
//import { JwtAuthGuard } from './jwt-auth.guards';
//import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //@UseGuards(LocalAuthGuard)
  @Post('/login')
  @Public()
  async login(@Body() user: LoginUserBody) {
    const { email, password } = user;
    const isValid = await this.authService.validateUser(email, password);

    if (isValid) {
      return this.authService.login(user);
    }

    return { message: 'e-mail ou senha inválido!' };
  }

  //Transferido para o arquivo de usuários
  //@UseGuards(JwtAuthGuard)
  //@Get('/profile')
  //getProfile(@Body() user: LoginUserBody) {
  //
  //}
}
