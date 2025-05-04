import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Zipper } from './zipper.schema';
import { Model } from 'mongoose';
import { FileService, Type } from 'src/common/utils/file.util';
import { compression } from 'src/common/utils/compress.util';

@Injectable()
export class ZipperService {
  constructor(
    @InjectModel(Zipper.name) private readonly zipper: Model<Zipper>,
    private readonly fileService: FileService,
  ) {}

  async compressFiles(files: any[]) {
    const filePaths: any[] = [];
    const compressedFiles: any[] = [];

    await Promise.all(
      files.map(async (file) => {
        const pathRoot = await this.fileService.writeFile(Type.FILES, file);
        filePaths.push(pathRoot);
      }),
    );
    await Promise.all(
      filePaths.map(async (file) => {
        await compression(file, 'files');
      }),
    );

    return { filePaths };
  }

  async getFiles() {}
}
