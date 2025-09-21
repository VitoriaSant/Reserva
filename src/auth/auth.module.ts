import { Module } from '@nestjs/common';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
    imports: [UsuarioModule],
    controllers: [AuthController],
    providers: [AuthService, PrismaService],
})
export class AuthModule {}

