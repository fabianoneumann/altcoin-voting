/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Altcoin } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { AltcoinsRepository } from '../altcoins-repository';

@Injectable()
export class PrismaAltcoinsRepository implements AltcoinsRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, ticker: string): Promise<void> {
    await this.prisma.altcoin.create({
      data: {
        id: randomUUID(),
        name,
        ticker,
      },
    });
  }

  async findMany(): Promise<Altcoin[]> {
    const altcoins = await this.prisma.altcoin.findMany();

    return altcoins;
  }
}
