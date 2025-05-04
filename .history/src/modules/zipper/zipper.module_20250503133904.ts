import { Module } from '@nestjs/common';
import { ZipperService } from './zipper.service';
import { ZipperController } from './zipper.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Zipper, ZipperSchema } from './zipper.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Zipper.name, schema: ZipperSchema }]),
  ],
  controllers: [ZipperController],
  providers: [ZipperService],
})
export class ZipperModule {}
