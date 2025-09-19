import { Body, Controller, Post } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { type ReservaDto } from './reserva.dto';

@Controller('reserva')
export class ReservaController {

    constructor (private readonly reservaService:ReservaService) {}
    @Post()
    async create(@Body() data: ReservaDto) {
        return this.reservaService.create(data);
    }
}
