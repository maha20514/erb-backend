import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProductDto } from '../nest/products/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(page: number = 1, limit: number) {
    const skip = (page - 1) * limit;

    return this.prisma.product.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
  }

  create(data: CreateProductDto) {
    return this.prisma.product.create({
      data,
    });
  }

  async update(id: number, data: Partial<CreateProductDto>) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }

  async search(search: string) {
    return this.prisma.product.findMany({
      where: {
        name: { contains: search, mode: 'insensitive' },
      },
    });
  }
}
