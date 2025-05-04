import { Module } from '@nestjs/common';
import { ZipperService } from './zipper.service';
import { ZipperController } from './zipper.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Zipper, ZipperSchema } from './zipper.schema';
import { FileService } from 'src/common/utils/file.util';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Zipper.name, schema: ZipperSchema }]),
  ],
  controllers: [ZipperController],
  providers: [ZipperService, FileService],
})
export class ZipperModule {}
