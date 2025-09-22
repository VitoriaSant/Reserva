import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { type ReservaDto } from './reserva.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Controller('reserva')
export class ReservaController {

    constructor (private readonly reservaService:ReservaService) {}
    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() data: ReservaDto) {
        return this.reservaService.create(data);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll() {
        return this.reservaService.findAll();
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.reservaService.findOne(Number(id));
    }
}
