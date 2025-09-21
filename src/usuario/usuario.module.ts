import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';

@Module({
  providers: [UsuarioService, PrismaService],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}
