import { Controller, Post } from '@nestjs/common';
import { ZipperService } from './zipper.service';

@Controller('zipper')
export class ZipperController {
  constructor(private readonly zipperService: ZipperService) {}

  @Post('compress')
  async compressFiles(files: any) {
    console.log(files);
  }
}
