/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { VotesController } from 'src/controllers/votes.controller';
import { VotesRepository } from 'src/repositories/votes-repository';
import { PrismaVotesRepository } from 'src/repositories/prisma/prisma-votes-repository';

@Module({
    imports: [],
    controllers: [VotesController],
    providers: [
        PrismaService,
        {
          provide: VotesRepository,
          useClass: PrismaVotesRepository
        },
    ]

})
export class VotesModule {}
