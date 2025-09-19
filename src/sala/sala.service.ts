import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SalaDto } from './sala.dto';

@Injectable()
export class SalaService {

    constructor (private prisma: PrismaService) {}
    async create(data: SalaDto) {
        const sala = await this.prisma.sala.create({ data });
        return sala;
    }
    async findAll() {
        const salas = await this.prisma.sala.findMany();
        return salas;
    }
    async findOne(id: number) {
        const sala = await this.prisma.sala.findUnique({
            where: { id },
        });
        return sala;
    }
    async update(id: number, data: Partial<SalaDto>) {
        const sala = await this.prisma.sala.update({
            where: { id },
            data,
        });
        return sala;
    }
    async remove(id: number) {
        await this.prisma.sala.delete({
            where: { id },
        });
        return { message: 'Sala deletada com sucesso' };
    }
}

