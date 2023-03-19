/* eslint-disable prettier/prettier */
import { Vote } from '@prisma/client'

export abstract class VotesRepository {
  abstract create(altcoinId: string, userId: string): Promise<void>;

  abstract findMany(): Promise<Vote[]>;
}