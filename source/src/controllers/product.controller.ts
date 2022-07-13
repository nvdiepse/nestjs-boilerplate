import { Controller } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Controller('/api/v1/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // @Get()
  // findById(int id): String{
  //   return this.productService
  // }
  // getProducts(): string {
  //   return this.productService.;
  // }
}
