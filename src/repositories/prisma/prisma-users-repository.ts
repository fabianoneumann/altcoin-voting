/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from '../users-repository';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  
  async create(username: string, email: string, password: string): Promise<User> {
    return await this.prisma.user.create({
      data: {
        id: randomUUID(),
        username,
        email,
        password,
      },
    });
  }

  async findMany(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users;
  }

  async update(id: string, username:string, email: string, password: string): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        username,
        email,
        password,
      }
    })
  }

  async delete(id: string) {
    await this.prisma.user.delete({
      where: {
        id: id,
      },
    })
  }

  async findById(id: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    })
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      }
    })
  }
}