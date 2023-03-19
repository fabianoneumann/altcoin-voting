/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserBody } from 'src/dtos/create-user-body';
import { UsersRepository } from 'src/repositories/users-repository';

@Controller('users')
export class UsersController {
    constructor(private usersRepository: UsersRepository) {}

    @Post()
    async create(@Body() body: CreateUserBody) {
        const { email, password } = body;

        await this.usersRepository.create(email, password);
    }

    @Get()
    async findAll(): Promise<User[]> {
       return await this.usersRepository.findMany();
    }
}