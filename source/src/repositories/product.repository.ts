import { ProductModel } from 'src/models/product.model';
import { Repository } from 'typeorm';

export class ProductRepository extends Repository<ProductModel> {
  // async getProducts() {
  //   // return await this.createQueryBuilder('product')
  // }
}
