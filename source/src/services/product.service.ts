import { Injectable } from '@nestjs/common';
import { ProductDao } from 'src/daos/product.dao';
import { ProductModel } from 'src/models/product.model';
import { ProductRepository } from 'src/repositories/product.repository';
import { BaseService } from './base.service';

@Injectable()
export class ProductService extends BaseService<
  ProductModel,
  ProductRepository
> {
  constructor(repository: ProductRepository) {
    super(repository);
  }

  // getProducts(): string {
  //   return this.repository.
  // }

  // async findById(id: number) {
  //   return await this.repository.findById(id);
  // }
  async updateById(id: number, product: ProductDao) {
    return await this.repository.update(id, product);
  }
}
