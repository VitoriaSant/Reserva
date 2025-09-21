import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usuarioService: UsuarioService) {}

  async signIn(dto: LoginDto) {
    const usuario = await this.usuarioService.findByEmail(dto.email);
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const senhaValida = await bcrypt.compare(dto.senha, usuario.senha);
    if (!senhaValida) {
      throw new UnauthorizedException('Senha inválida');
    }

    const { senha, ...rest } = usuario;
    return rest;
  }
}
