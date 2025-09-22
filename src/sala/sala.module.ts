import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SalaService } from './sala.service';
import { SalaController } from './sala.controller';
import { AuthModule } from 'src/auth/auth.module';
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
  providers: [SalaService, PrismaService],
  controllers: [SalaController],
})
export class SalaModule {}
