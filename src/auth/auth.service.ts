import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginDto } from './login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(dto: LoginDto) {
    const usuario = await this.usuarioService.findByEmail(dto.email);
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const senhaValida = await bcrypt.compare(dto.senha, usuario.senha);
    if (!senhaValida) {
      throw new UnauthorizedException('Senha inválida');
    }

    const payload = { sub: usuario.id, nivelAcesso: usuario.nivelAcesso };

    return { acess_token: await this.jwtService.signAsync(payload) };
  }
}
