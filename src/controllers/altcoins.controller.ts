/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Post } from '@nestjs/common';
import { Altcoin } from '@prisma/client';
import { CreateAltcoinBody } from 'src/dtos/create-altcoin-body';
import { AltcoinsRepository } from 'src/repositories/altcoins-repository';

@Controller('altcoins')
export class AltcoinsController {
    constructor(private altcoinsRepository: AltcoinsRepository) {}

    @Post()
    async create(@Body() body: CreateAltcoinBody) {
        const { name, ticker } = body;

        await this.altcoinsRepository.create(name, ticker);
    }

    @Get()
    async findAll(): Promise<Altcoin[]> {
       return await this.altcoinsRepository.findMany();
    }
}