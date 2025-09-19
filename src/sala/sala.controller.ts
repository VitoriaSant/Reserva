import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SalaService } from './sala.service';
import { type SalaDto } from './sala.dto';

@Controller('sala')
export class SalaController {
  constructor(private readonly salaService: SalaService) {}
  @Post()
  async create(@Body() data: SalaDto) {
    return this.salaService.create(data);
  }
  @Get()
  async findAll() {
    return this.salaService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.salaService.findOne(Number(id));
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<SalaDto>) {
    return this.salaService.update(Number(id), data);
  }
  @Delete(':id')  
  async remove(@Param('id') id: string) {
    return this.salaService.remove(Number(id));
  }
}
