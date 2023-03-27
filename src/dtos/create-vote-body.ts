/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVoteBody {

    @ApiProperty()
    @IsNotEmpty()
    altcoinId: string;

    @ApiProperty()
    @IsNotEmpty()
    userId: string;
}