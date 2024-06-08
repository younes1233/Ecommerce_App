import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

@Schema({ collection: 'Products' }) // Specify collection name as 'Products'
export class Product extends Document {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop({ default: 0 })
  discount: number;

  @Prop()
  category: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop()
  product_id: string;

  @Prop()
  image: string;

  // Add other properties as needed
}

export const ProductSchema = SchemaFactory.createForClass(Product);
