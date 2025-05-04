import { Schema } from '@nestjs/mongoose';

@Schema()
export class ZipperSchema {
  userId: string;
}
