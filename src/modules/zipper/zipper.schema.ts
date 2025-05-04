import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Zipper extends Document {
  @Prop()
  userId: string;

  @Prop()
  size: number;

  @Prop()
  sizeUnit: string;

  @Prop()
  createdAt: Date;

  @Prop()
  files: string[];
}

export const ZipperSchema = SchemaFactory.createForClass(Zipper);
