import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { SalaService } from './sala.service';
import { type SalaDto } from './sala.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('sala')
export class SalaController {
  constructor(private readonly salaService: SalaService) {}
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() data: SalaDto) {
    return this.salaService.create(data);
  }
  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return this.salaService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.salaService.findOne(Number(id));
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<SalaDto>) {
    return this.salaService.update(Number(id), data);
  }
  
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.salaService.remove(Number(id));
  }
}
