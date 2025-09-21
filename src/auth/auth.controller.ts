import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { loginDto } from './login.dto';

@Controller('auth')
export class AuthController {

    @UsePipes(ValidationPipe)
    @Post('login')
    async login(@Body() loginDto: loginDto) {
        // Implement login logic here
    }
}
