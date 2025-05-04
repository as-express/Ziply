import sharp from 'sharp';

export async function compressImage(file: any) {
  const compres = sharp(file.buffer);
}
