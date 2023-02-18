import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  list(): string {
    return 'All users list';
  }
  @Post('create/user')
  @HttpCode(204)
  createUser(@Body() createUserDto: CreateUserDto) {
    this.usersService.createUser(createUserDto);
  }
}
