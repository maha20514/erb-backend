import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: '123456' })
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  roleId: number;
}

export class LoginDto {
  @ApiProperty({ example: 'user@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456' })
  @IsString()
  password: string;
}
