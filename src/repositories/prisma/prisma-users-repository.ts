/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from '../users-repository';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(email: string, password: string): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: randomUUID(),
        email,
        password,
      },
    });
  }

  async findMany(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users;
  }
}