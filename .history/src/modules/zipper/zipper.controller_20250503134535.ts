import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { ZipperService } from './zipper.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('zipper')
export class ZipperController {
  constructor(private readonly zipperService: ZipperService) {}

  @Post('compress')
  @UseInterceptors(FilesInterceptor('files'))
  async compressFiles(files: any) {
    console.log(files);
  }
}
