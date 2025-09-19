import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { SalaModule } from './sala/sala.module';
import { ReservaModule } from './reserva/reserva.module';

@Module({
  imports: [UsuarioModule, SalaModule, ReservaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
