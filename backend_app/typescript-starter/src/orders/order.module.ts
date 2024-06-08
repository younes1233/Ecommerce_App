// orders.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from './order.controller';
import { OrdersService } from './order.service';
import { Order, OrderSchema } from './order.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
