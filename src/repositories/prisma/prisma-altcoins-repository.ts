/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Altcoin } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { AltcoinsRepository } from '../altcoins-repository';

@Injectable()
export class PrismaAltcoinsRepository implements AltcoinsRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, ticker: string): Promise<Altcoin> {
    return await this.prisma.altcoin.create({
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


  //TODO: Testar a remoção do Alcoin de dentro da promise e retirar o return e a const alcoin, como no método create
  //         1o testar como está e depois testar a alternativa
  async update(id: string, name: string, ticker: string): Promise<Altcoin> {
    return await this.prisma.altcoin.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        ticker: ticker,
      }
    })
  }

  async delete(id: string) {
    await this.prisma.altcoin.delete({
      where: {
        id: id,
      },
    })
  }

  async findById(id: string): Promise<Altcoin> | null {
    return await this.prisma.altcoin.findUnique({
      where: {
        id: id,
      },
    })
  }
  
  async findByTicker(ticker: string): Promise<Altcoin> | null {
    return await this.prisma.altcoin.findUnique({
      where: {
        ticker: ticker,
      },
    })
  }
}