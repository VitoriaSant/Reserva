import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './usuario.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsuarioService {
    
    constructor (private prisma: PrismaService) {}
    async create(data: UsuarioDto) {
        const usuario = await this.prisma.usuario.create({ data });
        return usuario;
    }   
    async findAll() {
        const usuarios = await this.prisma.usuario.findMany();
        return usuarios;
    }
    async findOne(id: number) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id },
        });
        return usuario;
    }
    async update(id: number, data: Partial<UsuarioDto>) {
        const usuario = await this.prisma.usuario.update({
            where: { id },
            data,
        });
        return usuario;
    }
    async remove(id: number) {
        await this.prisma.usuario.delete({
            where: { id },
        });
        return { message: 'Usuário deletado com sucesso' };
    }
}
