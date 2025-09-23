import {
  CanActivate,
  ExecutionContext,
  Injectable,
  mixin,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export function AuthGuard(requerPrivilegios: boolean = false) {
  @Injectable()
  class MixinAuthGuard implements CanActivate {
    constructor(public jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      
      try {
        if (!token) {
          throw new UnauthorizedException('Token is required');
        }

        const payload = await this.jwtService.verifyAsync(token, {
          secret: process.env.SECRET_KEY,
        });
        request['id'] = payload;
        console.log(payload);

        if (requerPrivilegios) {
          if (payload.nivelAcesso === false) {
            throw new UnauthorizedException('Privilégio insuficiente');
          }
        } else {
          return true;
        }

        // throw new UnauthorizedException('Invalid token');
      } catch (error) {
        if (error instanceof UnauthorizedException) {
          throw error;
        }
        throw new UnauthorizedException('Invalid token');
      }
      return true;
    }
    //Indicado pela documentação do NestJS, mas não funcionou
    // private extractTokenFromHeader(request: Request): string | undefined {
    //   const [type, token] = request.headers.get('token')?.split(' ') ?? [];
    //   return type === 'Bearer' ? token : undefined;
    // }

    extractTokenFromHeader(request: any): string | undefined {
      const authHeader = request.headers['authorization'];
      if (!authHeader) return undefined;
      const [type, token] = authHeader.split(' ');
      return type === 'Bearer' ? token : undefined;
    }
  }
  return mixin(MixinAuthGuard);
}
