import * as sharp from 'sharp';

export async function compressImage(file: any) {
  const compress = await sharp(file);
}
