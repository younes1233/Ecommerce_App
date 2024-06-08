import { Module } from '@nestjs/common';
import { ProductsModule } from 'products/products.module';
import { OrdersModule } from 'orders/order.module';
import { AdminModule } from 'admin/admin.module';
import {MongooseModule} from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from 'categories/category.module';
import 'dotenv/config';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/ecommerce_DB'), ProductsModule, OrdersModule, AdminModule,CategoryModule],
  controllers: [AppController,],
  providers: [AppService],
})

export class AppModule {}

