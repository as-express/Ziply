import * as sharp from 'sharp';

export async function compressImage(file: any) {
  const imageType = file.originalname.split('.').pop();
  const buffer = await sharp(file.buffer)
    .jpeg({ quality: 80 })
    .png({ quality: 80 });
}
