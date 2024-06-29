import { Controller, Get, Post, Body, Param, Put, Delete, UseFilters } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { HttpExceptionFilter } from './http-exception.filter';
import { CustomException } from './custom-exception';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(+id);
  }

  @Get('exception/nest')
  @UseFilters(HttpExceptionFilter)
  async nestExceptionTest(): Promise<void> {
    throw new NotFoundException('This is a NestJS exception');
  }

  @Get('exception/custom')
  async customExceptionTest(): Promise<void> {
    throw new CustomException('This is a custom exception');
  }
}
