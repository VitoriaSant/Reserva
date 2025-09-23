import { forwardRef, Module } from '@nestjs/common';
import { UsuarioModule } from '../usuario/usuario.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/database/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    forwardRef(() => UsuarioModule),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_kEY,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}