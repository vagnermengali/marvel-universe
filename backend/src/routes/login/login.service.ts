import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLoginDto } from './dto/create-login.dto';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) { }

  async login(CreateLoginDto: CreateLoginDto) {
    const { email, password } = CreateLoginDto;
    const accountEmail = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!accountEmail) {
      throw new UnauthorizedException('Invalid Email/Password');
    }

    if (!bcrypt.compareSync(password, accountEmail.password)) {
      throw new UnauthorizedException('Invalid Email/Password');
    }

    const token = jwt.sign(
      { user: accountEmail },
      process.env.SECRET_KEY,
      { expiresIn: '24h', subject: accountEmail.id },
    );

    const id = {
      ...accountEmail, password: undefined
    }

    return { token: token };
  }
}

