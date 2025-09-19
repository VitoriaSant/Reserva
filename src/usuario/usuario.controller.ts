import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { type UsuarioDto } from './usuario.dto';

@Controller('usuario')
export class UsuarioController {

    constructor (private readonly usuarioService:UsuarioService) {}
    @Post()
    async create(@Body() data: UsuarioDto) {
        return this.usuarioService.create(data);
    }
    @Get()
    async findAll() {
        return this.usuarioService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.usuarioService.findOne(Number(id));
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() data: Partial<UsuarioDto>) {
        return this.usuarioService.update(Number(id), data);
    }
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.usuarioService.remove(Number(id));
    }
}
