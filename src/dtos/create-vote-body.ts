/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateVoteBody {

    @IsNotEmpty()
    altcoinId: string;

    @IsNotEmpty()
    userId: string;
}