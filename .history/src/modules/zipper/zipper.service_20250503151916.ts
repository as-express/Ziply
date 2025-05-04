import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Zipper } from './zipper.schema';
import { Model } from 'mongoose';

@Injectable()
export class ZipperService {
  constructor(
    @InjectModel(Zipper.name) private readonly zipper: Model<Zipper>,
    private readonly zipperService: ZipperService,
  ) {}

  async compressFiles(files: any) {
    console.log(files);
  }

  async getFiles() {}
}
