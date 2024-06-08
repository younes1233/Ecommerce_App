// products.controller.ts
import { Controller, Get, Post, Body, Param, NotFoundException,Query} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get('products/search')
  async searchProducts(@Query('q') query: string): Promise<Product[]> {
    return this.productsService.searchProducts(query);
  }

  @Get('products')
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get('/product/:id')
  async findById(@Param('id') id: string): Promise<Product> {
    console.log (id);
    const product = await this.productsService.findById(id);
    if (!product) {
      //throw new NotFoundException('Product not found');
    }
    return product;
  }

  @Post()
  async create(@Body() productData: Product): Promise<Product> {
    return this.productsService.create(productData);
  }

  @Get('product/category/:category') // Define the route for finding products by category
  async findByCategory(@Param('category') category: string): Promise<Product[]> {
    return this.productsService.findByCategory(category);
  }

  
}
