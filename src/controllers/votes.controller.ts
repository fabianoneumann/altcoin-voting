/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { CreateVoteBody } from 'src/dtos/create-vote-body';
import { VotesRepository } from 'src/repositories/votes-repository';
import { VotesService } from 'src/services/votes.service';
import { ApiTags} from "@nestjs/swagger";

@ApiTags('votes')
@Controller('votes')
export class VotesController {
    constructor(
        private votesRepository: VotesRepository, 
        private votesService: VotesService
    ) {}

    @Post()
    async vote(@Body() body: CreateVoteBody) {
        const { altcoinId, userId } = body;

        // await this.votesRepository.create(altcoinId, userId);
        await this.votesService.vote(altcoinId, userId);
    }

    @Get()
    async findAll() {
       return await this.votesRepository.findMany();
    }

    @Get('/user/:userId')
    async findByUserId(@Param('userId') userId: string) {
        return await this.votesRepository.findByUserId(userId);
    }
}