import { Controller } from '@nestjs/common';
import { ZipperService } from './zipper.service';

@Controller('zipper')
export class ZipperController {
  constructor(private readonly zipperService: ZipperService) {}

  async compressFiles(files: any) {
    console.log(files);
  }
}
