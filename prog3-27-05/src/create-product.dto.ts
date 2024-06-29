import { IsNotEmpty, IsString, IsNumber, IsDecimal } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsDecimal({ decimal_digits: '2' })
  price: number;
}
