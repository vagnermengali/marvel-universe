import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { hashSync } from 'bcryptjs';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: any): Promise<any> {
    const { first_name, last_name, email, password } = createUserDto;
  
    const uniqueUserEmail = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  
    if (uniqueUserEmail) {
      throw new BadRequestException('Email is already in use');
    }
  
    const newUser = await this.prisma.user.create({
      data: {
        first_name,
        last_name,
        email,
        password: hashSync(password, 10),
      },
    });
  
    return {
      id:  newUser.id,
      username: `${first_name} ${last_name}`,
      email: newUser.email,
      created_at: newUser.created_at
    };
  }

  async findAll() {
    const allUsers = await this.prisma.user.findMany();
  
    return allUsers.map(({ first_name, last_name, email, created_at, updated_at }) => ({
      username: `${first_name} ${last_name}`,
      email,
      created_at,
      updated_at
    }));
  }

  async findOne(id: string) {
    const findOneUser = await this.prisma.user.findUnique({
      where: { id }
    });
    return {
      id:  findOneUser.id,
      username: `${findOneUser.first_name} ${findOneUser.last_name}`,
      email: findOneUser.email,
      created_at:  findOneUser.created_at,
      updated_at:  findOneUser.updated_at,
    };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { first_name, last_name, email, password } = updateUserDto;
  
    const data: any = {};
  
    if (first_name) {
      data.first_name = first_name;
    }
  
    if (last_name) {
      data.last_name = last_name;
    }
  
    if (email) {
      data.email = email;
    }
  
    if (password) {
      data.password = password;
    }
  
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data,
    });
  
    return {
      id: updatedUser.id,
      username: `${updatedUser.first_name} ${updatedUser.last_name}`,
      email: updatedUser.email,
      created_at: updatedUser.created_at,
      updated_at: updatedUser.updated_at,
    };
  }

  async remove(id: string) {
    return !!(await this.prisma.user.delete({ where: { id } }));
  }
}
