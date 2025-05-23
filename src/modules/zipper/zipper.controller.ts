import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ZipperService } from './zipper.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
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
  @UseInterceptors(FileInterceptor('image'))
  async compressImages(
    @Req() req: Request,
    @Res() res: Response,
    @UploadedFile() image,
  ) {
    const compressedBuffer = await this.zipperService.compressImages(
      image,
      req,
    );

    const ext = image.originalname.split('.').pop().toLowerCase();
    const mimeTypeMap = {
      jpeg: 'image/jpeg',
      jpg: 'image/jpeg',
      png: 'image/png',
      webp: 'image/webp',
    };
    const contentType = mimeTypeMap[ext] || 'application/octet-stream';

    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', 'inline');
    res.end(compressedBuffer);
  }

  @Get()
  async getFiles(@Req() req: Request) {
    return this.zipperService.getFiles(req);
  }
}
