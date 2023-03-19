/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateUserBody {

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}