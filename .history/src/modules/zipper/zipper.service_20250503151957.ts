import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Zipper } from './zipper.schema';
import { Model } from 'mongoose';
import { FileService, Type } from 'src/common/utils/file.util';

@Injectable()
export class ZipperService {
  constructor(
    @InjectModel(Zipper.name) private readonly zipper: Model<Zipper>,
    private readonly fileService: FileService,
  ) {}

  async compressFiles(files: any) {
    const file = await this.fileService.writeFile(Type.FILES, files[0]);
    console.log(file);
  }

  async getFiles() {}
}
