// src/prisma/prisma.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // حتى يمكن استخدامه في وحدات أخرى
})
export class PrismaModule {}
