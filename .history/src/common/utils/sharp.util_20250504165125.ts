import * as sharp from 'sharp';
import { formatBytes } from './size-format.util';

export async function compressImage(file: any) {
  const imageType = file.originalname.split('.')[1];
  if (imageType === 'jpeg' || imageType === 'jpg') {
    return await sharp(file.buffer).jpeg({ quality: 75 }).toBuffer();
  } else if (imageType === 'png') {
    return await sharp(file.buffer).png({ quality: 75 }).toBuffer();
  } else if (imageType === 'webp') {
    return await sharp(file.buffer).webp({ quality: 75 }).toBuffer();
  }

  const { size, sizeUtil } = formatBytes(stats.size);
  return { file: file.buffer };
}
