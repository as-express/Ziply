import {
  Controller,
  Post,
  Req,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ZipperService } from './zipper.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('zipper')
export class ZipperController {
  constructor(private readonly zipperService: ZipperService) {}

  @Post('compress')
  @UseInterceptors(FilesInterceptor('files'))
  async compressFiles(@Req() req: Request, @UploadedFiles() files) {
    return this.zipperService.compressFiles(files, req);
  }
}
