import bcrypt = require('bcrypt');
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUser } from './interface/user.interface';

@Injectable()
export class UsersService {
  // private readonly users: CreateUser[] = [];

  constructor(private prisma: PrismaService) {}

  async createUser(user: CreateUser) {
    await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: bcrypt.hashSync(user.password, 10),
        role: 'user',
      },
    });
    return {
      statusCode: 204,
      message: `User ${user.name} is created.`,
    };
  }
}
