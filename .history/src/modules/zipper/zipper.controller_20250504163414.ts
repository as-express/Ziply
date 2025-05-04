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
import { Request, Response } from 'express';

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
    const contentType = mimeTypeMap[ext] || 'application/octet-stream';
    const ext = images[1].originalname.split('.').pop();
    const mimeTypeMap = {
      jpeg: 'image/jpeg',
      jpg: 'image/jpeg',
      png: 'image/png',
      webp: 'image/webp',
    };

    res.setHeader('Content-Type', contentType);
    res.send(compressed);
  }

  @Get()
  async getFiles(@Req() req: Request) {
    return this.zipperService.getFiles(req);
  }
}
