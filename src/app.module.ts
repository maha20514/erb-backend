import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [UsersModule, AuthModule, ProductsModule],
  providers: [PrismaService],
})
export class AppModule {}
