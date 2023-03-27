/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Post, Request, Put, Param, Delete, ClassSerializerInterceptor } from '@nestjs/common';
import { CreateUserBody } from 'src/dtos/create-user-body';
import { UsersService } from 'src/services/users.service';
import { ApiTags } from "@nestjs/swagger";
import { Public } from 'src/decorators/public';
import { UpdatePasswordBody } from 'src/dtos/update-password-body';
import { LoginUserBody } from 'src/dtos/login-user-body';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() user: CreateUserBody) {
        this.usersService.create(user);
    }

    @Get()
    @Public()
    async findMany() {
       return await this.usersService.findMany();
    }

    @Put('/:id')
    async update(@Param('id') id: string, @Body() body: CreateUserBody) {
        const {username, email, password} = body;

        return await this.usersService.update(id, username, email, password);
    }

    @Put('/updatePassword/:id')
    async updatePassword(@Param('id') id: string, @Body() body: UpdatePasswordBody) {
        const { oldPassword, newPassword } = body;

        return await this.usersService.updatePassword(id, {oldPassword, newPassword});
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        await this.usersService.delete(id);

        return { message: 'Objeto excluido com sucesso!' };
    }

    @Get('/:id')
    async findById(@Param('id') id: string) {
        return await this.usersService.findById(id);
    }

    @Get('/email')
    async findByEmail(@Body() body: LoginUserBody) {
        const { email } = body;
        return await this.usersService.findByEmail(email);
    }

    //@UseGuards(JwtAuthGuard)
    @Get('/profile')
    async getProfile(@Body() body: LoginUserBody) {
        const { email } = body;
        return await this.usersService.findByEmail(email);
    }
}