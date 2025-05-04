import * as sharp from 'sharp';

export async function compressImage(file: any) {
  const imageType = file.originalname.split('.')[1];
  if (imageType === 'jpeg') {
    return await sharp(file.buffer).jpeg({ quality: 80 }).toBuffer();
  }
}
