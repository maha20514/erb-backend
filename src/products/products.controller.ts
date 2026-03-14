import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
  Patch,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from '../nest/products/create-product.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Permissions } from '../auth/roles.decorator';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateProductDto } from 'src/nest/products/update-product.dto';

@ApiTags('Product')
@ApiBearerAuth()
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Permissions('product.read')
  @Get()
  findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.productsService.findAll(Number(page), Number(limit));
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Permissions('product.create')
  @Post()
  create(@Body() data: CreateProductDto) {
    return this.productsService.create(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  @ApiBody({ type: UpdateProductDto })
  @ApiOperation({ summary: 'Update a product' })
  updateProduct(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return this.productsService.update(Number(id), body);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Permissions('product.delete')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(Number(id));
  }

  @Get('search')
  search(@Query('search') search: string) {
    return this.productsService.search(search);
  }
}
