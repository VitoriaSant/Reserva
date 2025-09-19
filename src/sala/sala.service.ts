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
}
