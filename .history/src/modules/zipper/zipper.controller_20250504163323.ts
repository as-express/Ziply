import {
  Controller,
  Get,
  Post,
  Req,
  Res,
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
  async compressImages(
    @Req() req: Request,
    @Res() res: Response,
    @UploadedFiles() images,
  ) {
    const compressed = await this.zipperService.compressImages(images);
    res.setHeader('Content-Type', contentType);
    res.send(compressed);
  }

  @Get()
  async getFiles(@Req() req: Request) {
    return this.zipperService.getFiles(req);
  }
}
