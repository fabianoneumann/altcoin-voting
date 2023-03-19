/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Vote } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { VotesRepository } from '../votes-repository';

@Injectable()
export class PrismaVotesRepository implements VotesRepository {
  constructor(private prisma: PrismaService) {}

  async create(altcoinId: string, userId: string): Promise<void> {
    await this.prisma.vote.create({
      data: {
        id: randomUUID(),
        altcoinId,
        userId,
      },
    });
  }

  async findMany(): Promise<Vote[]> {
    const votes = await this.prisma.vote.findMany();

    return votes;
  }

  async findByUser(userId: string): Promise<Vote[]> {
    const votes = await this.prisma.vote.findMany({
      where: {
        userId: userId,
      },
    })

    return votes;
  }
}