import { Injectable } from '@nestjs/common';
import { ProductModel } from 'src/models/product.model';
import { ProductRepository } from 'src/repositories/product.repository';
import { BaseService } from './base.service';

@Injectable()
export class ProductService extends BaseService<ProductModel, ProductRepository> {
  // constructor() {
  //   super();
  // }

  getProducts(): string {
    return 'Hello World!';
  }
}
