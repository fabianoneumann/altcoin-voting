/* eslint-disable prettier/prettier */
import { Altcoin } from '@prisma/client'

export abstract class AltcoinsRepository {
  abstract create(name: string, ticker: string): Promise<Altcoin>;

  abstract findMany(): Promise<Altcoin[]>;

  abstract update(id: string, name: string, ticker: string): Promise<Altcoin>;

  abstract delete(id: string);

  abstract findById(id: string): Promise<Altcoin> | null;

  abstract findByTicker(ticker: string): Promise<Altcoin> | null;
}