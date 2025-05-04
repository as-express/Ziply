import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Zipper } from './zipper.schema';
import { Model } from 'mongoose';
import { FileService, Type } from 'src/common/utils/file.util';
import { compression } from 'src/common/utils/compress.util';
import { CompressedFiles } from './interfaces/compressedFiles.interface';
import { Request } from 'express';
import { compressImage } from 'src/common/utils/sharp.util';

@Injectable()
export class ZipperService {
  constructor(
    @InjectModel(Zipper.name) private readonly zipper: Model<Zipper>,
    private readonly fileService: FileService,
  ) {}

  async compressFiles(files: any[], req: Request) {
    const filePaths: any[] = [];
    const compressedFiles: CompressedFiles[] = [];

    await Promise.all(
      files.map(async (file) => {
        const pathRoot = await this.fileService.writeFile(Type.FILES, file);
        filePaths.push(pathRoot);
      }),
    );
    await Promise.all(
      filePaths.map(async (file) => {
        const result = await compression(file, 'files');
        compressedFiles.push(result);
      }),
    );

    await Promise.all(
      compressedFiles.map(async (i) => {
        await this.zipper.create({
          files: i.relativePath,
          size: i.size,
          sizeUnit: i.sizeUtil,
          userId: (req as any).userId,
        });
      }),
    );

    return { compressedFiles };
  }

  async getFiles(req: Request) {
    return await this.zipper.find({ userId: (req as any).userId });
  }

  async compressImages(images: any[]) {
    await Promise.all(
      images.map(async (img) => {
        await this.fileService.writeFile(Type.IMAGES, img);
      }),
    );

    const result = await Promise.all(
      images.map(async (img) => await compressImage(img)),
    );
  }
}
