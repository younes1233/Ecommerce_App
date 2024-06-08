// order.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'Orders' })
export class Order extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true, type: [{ productId: String, quantity: Number }] })
  products: { productId: string, quantity: number }[];

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ default: 'pending', enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'] })
  status: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
