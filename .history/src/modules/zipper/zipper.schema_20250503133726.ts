import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ZipperSchema {
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

export class zipperSchema = SchemaFactory.createForClass(ZipperSchema);
