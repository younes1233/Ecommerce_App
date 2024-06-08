// admin.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Schema({ collection: 'Admin' })
export class Admin extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  async comparePassword(enteredPassword: string): Promise<boolean> {
    return bcrypt.compare(enteredPassword, this.password);
  }
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
