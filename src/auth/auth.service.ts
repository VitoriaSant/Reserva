import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AuthService {
    constructor (private prisma:PrismaService){}
    async validateUser(email: string, password: string): Promise<any> {
        // Implement user validation logic here
        return null;
    }
}
