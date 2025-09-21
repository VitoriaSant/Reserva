import {Body,Controller,HttpCode,HttpStatus,Post,UsePipes,ValidationPipe} from '@nestjs/common';
import { LoginDto } from './login.dto';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post()
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto);
  }
}
