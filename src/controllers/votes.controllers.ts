/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Post } from '@nestjs/common';
import { Vote } from '@prisma/client';
import { CreateVoteBody } from 'src/dtos/create-vote-body';
import { VotesRepository } from 'src/repositories/votes-repository';

@Controller('votes')
export class VotesController {
    constructor(private votesRepository: VotesRepository) {}

    @Post()
    async vote(@Body() body: CreateVoteBody) {
        const { altcoinId, userId } = body;

        await this.votesRepository.create(altcoinId, userId);
    }

    @Get()
    async findAll(): Promise<Vote[]> {
       return await this.votesRepository.findMany();
    }
}