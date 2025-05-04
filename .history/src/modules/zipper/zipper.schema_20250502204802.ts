import { Schema } from '@nestjs/mongoose';

@Schema()
export class ZipperSchema {
  name: string;
  files: string[];
}
