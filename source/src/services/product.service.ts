import { Injectable } from '@nestjs/common';
import { ProductModel } from '../models/product.model';
import { ProductRepository } from '../repositories/product.repository';
import { BaseService } from './base.service';
@Injectable()
export class ProductService extends BaseService<
  ProductModel,
  ProductRepository
> {
  constructor(repository: ProductRepository) {
    super(repository);
  }

  getProducts(): string {
    return 'get product';
  }

  // async findById(id: number) {
  //   return await this.repository.findById(id);
  // }
  // async updateById(id: number, product: ProductDao) {
  //   return await this.repository.update(id, product);
  // }
}
