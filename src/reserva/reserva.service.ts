import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ReservaService {

    constructor (private prisma:PrismaService) {}
    async create(data) {
        const reserva = await this.prisma.reserva.create({
                data: {
                descReserva: data.descReserva,
                data: data.data,
                horaInicio: data.horaInicio,
                horaFim: data.horaFim,
                Sala: { connect: { id: data.salaId } },
                Usuario: { connect: { id: data.usuarioId } },
            },
        });
        return reserva;
    }

}
