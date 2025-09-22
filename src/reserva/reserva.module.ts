import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { forwardRef } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
      forwardRef(() => AuthModule),
      JwtModule.register({
        global: true,
        secret: process.env.SECRET_KEY,
        signOptions: { expiresIn: '3600s' },
      }),
    ],
  providers: [ReservaService, PrismaService],
  controllers: [ReservaController],
})
export class ReservaModule {}
