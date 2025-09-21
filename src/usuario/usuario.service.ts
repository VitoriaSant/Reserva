import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './usuario.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}
  async create(data: UsuarioDto) {
    const hashSenha = await bcrypt.hash(data.senha, 10);
    const usuario = await this.prisma.usuario.create({
      data: { ...data, senha: hashSenha },
    });
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
    const updateData = { ...data };
    if (data.senha) {
      updateData.senha = await bcrypt.hash(data.senha, 10);
    }
    const usuario = await this.prisma.usuario.update({
      where: { id },
      data: updateData,
    });
    return usuario;
  }
  async remove(id: number) {
    await this.prisma.usuario.delete({
      where: { id },
    });
    return { message: 'Usuário deletado com sucesso' };
  }
  async findByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }
}
