import { exec } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

type folderName = 'files' | 'images';
export function compression(filePath: string, folder: folderName) {
  const outputPath = path.join(
    __dirname,
    '..',
    '..',
    'compressed',
    `${folder}`,
  );
  if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath, { recursive: true });

  const outputArchive = path.join(outputPath, `${path.basename(filePath)}.7z`);
  exec(`7z a -mx=9 "${outputArchive}" "${filePath}"`, (err, stdout, stderr) => {
    if (err) {
      console.error('Error compressing file:', stderr);
    }
  });

  return outputArchive.split('dist/')[1];
}
