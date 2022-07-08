import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Controller("/api/v1/products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): string {
    return this.productService.getProducts();
  }
}
