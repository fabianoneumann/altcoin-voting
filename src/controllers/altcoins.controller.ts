/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Post, Put, Param, Delete } from '@nestjs/common';
import { CreateAltcoinBody } from 'src/dtos/create-altcoin-body';
import { AltcoinsRepository } from 'src/repositories/altcoins-repository';

@Controller('altcoins')
export class AltcoinsController {
    constructor(private altcoinsRepository: AltcoinsRepository) {}

    @Post()
    async create(@Body() body: CreateAltcoinBody) {
        const { name, ticker } = body;

        return await this.altcoinsRepository.create(name, ticker);
    }

    @Get()
    async findAll() {
        return await this.altcoinsRepository.findMany();
    }

    @Put('/:id')
    async update(@Param('id') id: string, @Body() body: CreateAltcoinBody) {
        const { name, ticker } = body;

        return await this.altcoinsRepository.update(id, name, ticker);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        await this.altcoinsRepository.delete(id);

        return { message: 'Objeto excluido com sucesso!' };
    }

    @Get('/:id')
    async findById(@Param('id') id: string) {
        return await this.altcoinsRepository.findById(id);
    }

    @Get('ticker/:ticker')
    async findByTicker(@Param('ticker') ticker: string) {
        return await this.altcoinsRepository.findByTicker(ticker);
    }
}