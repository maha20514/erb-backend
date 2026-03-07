// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule], // ✅ استيراد PrismaService
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // إذا أردت استخدام UsersService في وحدات أخرى
})
export class UsersModule {}
