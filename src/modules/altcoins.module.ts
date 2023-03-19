/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AltcoinsController } from 'src/controllers/altcoins.controller';
import { PrismaService } from 'src/database/prisma.service';
import { AltcoinsRepository } from 'src/repositories/altcoins-repository';
import { PrismaAltcoinsRepository } from 'src/repositories/prisma/prisma-altcoins-repository';

@Module({
  imports: [],
  controllers: [AltcoinsController],
  providers: [
    PrismaService,
    {
      provide: AltcoinsRepository,
      useClass: PrismaAltcoinsRepository,
    },
  ],
})
export class AltcoinsModule {}
