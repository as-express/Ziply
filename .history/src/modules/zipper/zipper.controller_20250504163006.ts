import {
  Controller,
  Get,
  Post,
  Req,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ZipperService } from './zipper.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';

@Controller('zipper')
export class ZipperController {
  constructor(private readonly zipperService: ZipperService) {}

  @Post('compress')
  @UseInterceptors(FilesInterceptor('files'))
  async compressFiles(@Req() req: Request, @UploadedFiles() files) {
    return this.zipperService.compressFiles(files, req);
  }

  @Post('compress/img')
  @UseInterceptors(FilesInterceptor('images'))
  async compressImages(@Req() req: Request, @UploadedFiles() images) {
    return this.zipperService.compressFiles(images, req);
  }

  @Get()
  async getFiles(@Req() req: Request) {
    return this.zipperService.getFiles(req);
  }
}
