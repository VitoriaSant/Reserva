import { Body, Controller, Post } from '@nestjs/common';
import { SalaService } from './sala.service';
import { type SalaDto } from './sala.dto';

@Controller('sala')
export class SalaController {

    constructor (private readonly salaService:SalaService) {}
    @Post()
    async create(@Body() data: SalaDto) {
        return this.salaService.create(data);
    }

}
