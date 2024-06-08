import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({ collection: 'Categories' })
export class Category extends Document  {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  createdAt: Date;

  @Prop()
  parentCategory: string;

  @Prop()
  slug: string;

  @Prop()
  image: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
