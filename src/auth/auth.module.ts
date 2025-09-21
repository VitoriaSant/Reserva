import { Module } from '@nestjs/common';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/database/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsuarioModule,
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_kEY,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}

