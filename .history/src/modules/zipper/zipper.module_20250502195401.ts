import { Module } from '@nestjs/common';
import { ZipperService } from './zipper.service';
import { ZipperController } from './zipper.controller';

@Module({
  controllers: [ZipperController],
  providers: [ZipperService],
})
export class ZipperModule {}
