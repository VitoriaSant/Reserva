import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';

@Module({
  providers: [ReservaService, PrismaService],
  controllers: [ReservaController],
})
export class ReservaModule {}
