// orders.controller.ts
import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { OrdersService } from './order.service';
import { Order } from './order.model';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Order> {
    try {
      return await this.ordersService.findOneById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post()
  async create(@Body() orderData: Order): Promise<Order> {
    try {
      return await this.ordersService.create(orderData);
    } catch (error) {
      throw new Error(`Failed to create order: ${error.message}`);
    }
  }
}
