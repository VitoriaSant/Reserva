import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { type ReservaDto } from './reserva.dto';

@Controller('reserva')
export class ReservaController {

    constructor (private readonly reservaService:ReservaService) {}
    @Post()
    async create(@Body() data: ReservaDto) {
        return this.reservaService.create(data);
    }
    @Get()
    async findAll() {
        return this.reservaService.findAll();
    }
    @Get(':id') 
    async findOne(@Param('id') id: string) {
        return this.reservaService.findOne(Number(id));
    }
}
