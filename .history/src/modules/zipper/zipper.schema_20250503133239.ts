import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class ZipperSchema {
  @Prop()
  userId: string;

  @Prop()
  size: number;

  @Prop()
  sizeUnit: string;
}
