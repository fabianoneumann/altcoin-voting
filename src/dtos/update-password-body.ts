/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordBody {
  
    @ApiProperty()
    @IsNotEmpty()
    readonly newPassword: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly oldPassword: string;
}