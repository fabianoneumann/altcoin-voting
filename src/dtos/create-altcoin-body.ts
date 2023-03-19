/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateAltcoinBody {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    ticker: string;
}