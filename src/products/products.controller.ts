/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ProductsService } from './products.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private ProductsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.ProductsService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.ProductsService.findOne(Number(id));
  }

  @Post()
  createProduct(@Body() body: { name: string; price: number }) {
    return this.ProductsService.create(body);
  }
}
