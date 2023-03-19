/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Post, Put, Param, Delete } from '@nestjs/common';
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
    async findAll() {
       return await this.usersRepository.findMany();
    }

    @Put('/:id')
    async update(@Param('id') id: string, @Body() body: CreateUserBody) {
        const {email, password} = body;

        return await this.usersRepository.update(id, email, password);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        await this.usersRepository.delete(id);

        return { message: 'Objeto excluido com sucesso!' };
    }

    @Get('/:id')
    async findById(@Param('id') id: string) {
        return await this.usersRepository.findById(id);
    }

    @Get('/email/:email')
    async findByEmail(@Param('email') email: string) {
        return await this.usersRepository.findByEmail(email);
    }
}