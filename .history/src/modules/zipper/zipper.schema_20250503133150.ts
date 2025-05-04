import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class ZipperSchema {
  @Prop()
  userId: string;
}
