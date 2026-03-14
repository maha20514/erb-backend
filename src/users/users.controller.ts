/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Permissions } from '../auth/roles.decorator';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { CreateUserDto } from 'src/nest/users/create-user.dto';
import { UpdateUserDto } from 'src/nest/users/update-user.dto';

@ApiTags('User')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Permissions('user.read')
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Permissions('user.read')
  @Get(':id')
  getUser(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findOne(Number(id));
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Permissions('user.create')
  @Post()
  createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.create(body);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Permissions('user.update')
  @Patch(':id')
  @ApiOperation({ summary: 'Update user' })
  @ApiBody({ type: UpdateUserDto })
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(Number(id), body);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Permissions('user.delete')
  @Delete(':id')
  remove(@Param('id') id: string, userId: number) {
    return this.usersService.remove(Number(id), userId);
  }
}
