/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsersController } from 'src/controllers/users.controller';
import { UsersRepository } from 'src/repositories/users-repository';
import { PrismaUsersRepository } from 'src/repositories/prisma/prisma-users-repository';
import { UsersService } from 'src/services/users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    UsersService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
