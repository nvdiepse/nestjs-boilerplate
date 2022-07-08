import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductController
  ],
  providers: [
    AppService,
    ProductService
  ],
})
export class AppModule {}
