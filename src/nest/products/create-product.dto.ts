import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsInt } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Laptop' })
  @IsString()
  name: string;

  @ApiProperty({ example: 5000 })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 10 })
  @IsInt()
  stock: number;
}
