import * as sharp from 'sharp';
import { formatBytes } from './size-format.util';

export async function compressImage(file: any) {
  const imageType = file.originalname.split('.').pop().toLowerCase();
  let compressedBuffer: Buffer;

  if (imageType === 'jpeg' || imageType === 'jpg') {
    compressedBuffer = await sharp(file.buffer)
      .jpeg({ quality: 75 })
      .toBuffer();
  } else if (imageType === 'png') {
    compressedBuffer = await sharp(file.buffer).png({ quality: 75 }).toBuffer();
  } else if (imageType === 'webp') {
    compressedBuffer = await sharp(file.buffer)
      .webp({ quality: 75 })
      .toBuffer();
  } else {
    compressedBuffer = file.buffer;
  }

  const sizeInBytes = compressedBuffer.length;
  const { size, sizeUtil } = formatBytes(sizeInBytes);

  return {
    buffer: compressedBuffer,
    size,
    sizeUtil,
  };
}
