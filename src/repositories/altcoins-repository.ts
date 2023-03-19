/* eslint-disable prettier/prettier */
import { Altcoin } from '@prisma/client'

export abstract class AltcoinsRepository {
  abstract create(name: string, ticker: string): Promise<void>;

  abstract findMany(): Promise<Altcoin[]>;
}