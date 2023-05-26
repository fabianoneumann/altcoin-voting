/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { VotesRepository } from 'src/repositories/votes-repository';
import { UsersService } from 'src/services/users.service';

@Injectable()
export class VotesService {
  constructor(
    private votesRepository: VotesRepository,
    private usersService: UsersService,
  ) {}

  private async verifyVoteLimit(userId: string): Promise<void> {
    const voteLimitPerWeek = 3;

    const voteCount = await this.usersService.countUserVotesForCurrentWeek(userId);

    if (voteCount >= voteLimitPerWeek) {
      throw new HttpException('Limite de votos por semana excedido', HttpStatus.BAD_REQUEST);
    }
  }

  async vote(altcoinId: string, userId: string): Promise<void> {
    await this.verifyVoteLimit(userId);

    await this.votesRepository.create(altcoinId, userId);
  }
}
