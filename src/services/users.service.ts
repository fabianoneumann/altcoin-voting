/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserBody } from 'src/dtos/create-user-body';
import { UpdatePasswordBody } from 'src/dtos/update-password-body';
import { UsersRepository } from 'src/repositories/users-repository';

//interface FormatLogin extends Partial<User> {
//    login: string
//}

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    async create({username, email, password}: CreateUserBody): Promise<any> {
        const user = await this.usersRepository.findByEmail(email);

        if (user) {
            throw new HttpException("E-mail indisponível", HttpStatus.CONFLICT);
        }

        await this.usersRepository.create(username, email, password);
    }

    //Com o serviço de disparo de e-mail (VER: Nodemailer) para validação do usuário, será necessário
    //  adicionar uma variável boleana "active" em usuário e deixar por padrão como false.
    //  assim que o usuário acessar o link enviado no e-mail, a variável é mudada para true
    //async activateUser()

    async updatePassword(id: string, {oldPassword, newPassword}: UpdatePasswordBody): Promise<User> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new HttpException("invalid_credentials", HttpStatus.UNAUTHORIZED);
        }

        if (oldPassword !== user.password) {
            throw new HttpException("invalid credentials", HttpStatus.UNAUTHORIZED);
        }

        return await this.usersRepository.update(id, user.username, user.email, newPassword);
    }

    async findMany() {
        return await this.usersRepository.findMany();
    }

    async update(id:string, username: string, email: string, password: string) {
        return await this.usersRepository.update(id, username, email, password);
    }

    async delete(id: string) {
        await this.usersRepository.delete(id);
    }

    async findById(id: string) {
        return await this.usersRepository.findById(id);
    }

    async findByEmail(email: string) {
        return await this.usersRepository.findByEmail(email);
    }

    async findByPayload({email}: any): Promise<any> {
        return await this.findByEmail(email);
    }

    async countUserVotesForCurrentWeek(userId: string) {
        return await this.usersRepository.countUserVotesForCurrentWeek(userId);
    }
}
