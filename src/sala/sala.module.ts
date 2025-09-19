import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SalaService } from './sala.service';
import { SalaController } from './sala.controller';

@Module({
  providers: [SalaService, PrismaService],
  controllers: [SalaController],
})
export class SalaModule {}
