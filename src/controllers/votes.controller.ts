/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { CreateVoteBody } from 'src/dtos/create-vote-body';
import { VotesRepository } from 'src/repositories/votes-repository';
import {ApiQuery, ApiSecurity, ApiTags} from "@nestjs/swagger";
import { Public } from 'src/decorators/public';

@ApiTags('votes')
@Controller('votes')
export class VotesController {
    constructor(private votesRepository: VotesRepository) {}

    @Post()
    async vote(@Body() body: CreateVoteBody) {
        const { altcoinId, userId } = body;

        await this.votesRepository.create(altcoinId, userId);
    }

    @Get()
    @Public()
    async findAll() {
       return await this.votesRepository.findMany();
    }

    @Get('/user/:userId')
    async findByUserId(@Param('userId') userId: string) {
        return await this.votesRepository.findByUserId(userId);
    }
}