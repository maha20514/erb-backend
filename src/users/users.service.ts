/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from '../nest/users/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { UpdateUserDto } from 'src/nest/users/update-user.dto';
import { LogsService } from 'src/logs/logs.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private logsService: LogsService,
  ) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        role: {
          include: {
            permissions: {
              include: {
                permission: true,
              },
            },
          },
        },
      },
    });
  }

  async create(data: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number, userId: number) {
    const user = await this.prisma.user.delete({
      where: { id },
    });

    await this.logsService.createLogger('DELETE_USER', userId, 'User', id);

    return user;
  }
}
