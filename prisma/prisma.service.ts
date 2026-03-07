/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'], // اختياري
    });
  }

  async onModuleInit() {
    await this.$connect(); // يضمن الاتصال عند بدء الوحدة
  }
}
