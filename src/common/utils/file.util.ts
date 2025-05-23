import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { v4 } from 'uuid';

export enum Type {
  FILES = 'files',
  IMAGES = 'images',
}

@Injectable()
export class FileService {
  async writeFile(type: Type, file: any) {
    const fileType = file.originalname.split('.').pop();
    const fileName = v4() + '.' + fileType;
    const filePath = path.resolve(__dirname, '..', '..', 'static', type);

    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }
    const fullPath = path.resolve(filePath, fileName);
    fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
    return fullPath;
  }

  async removeFile(type: Type, file: string) {
    const filePath = path.resolve(__dirname, '..', '..', 'static', type, file);
    await fs.promises.unlink(filePath);

    return 'File is removed';
  }
}
