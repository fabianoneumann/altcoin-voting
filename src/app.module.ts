import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AltcoinsModule } from './modules/altcoins.module';
import { UsersModule } from './modules/users.module';
import { VotesModule } from './modules/votes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AltcoinsModule, UsersModule, VotesModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
