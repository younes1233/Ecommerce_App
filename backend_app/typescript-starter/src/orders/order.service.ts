// orders.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.model';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private readonly orderModel: Model<Order>) {}

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async create(orderData: Order): Promise<Order> {
    // Validate orderData here (e.g., check product availability, calculate total price)
    // Handle errors and return appropriate responses
    // For demonstration purposes, let's assume orderData validation and processing here

    const createdOrder = new this.orderModel(orderData);
    return createdOrder.save();
  }

  async findOneById(id: string): Promise<Order> {
    const order = await this.orderModel.findById(id).exec();
    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }
    return order;
  }
}
