import { exec } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

type folderName = 'files' | 'images';
export async function compression(filePath: string, folder: folderName) {
  const outputPath = path.join(process.cwd(), 'compressed', folder);
  if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath, { recursive: true });

  const outputArchive = path.join(outputPath, `${path.basename(filePath)}.7z`);
  exec(`7z a -mx=9 "${outputArchive}" "${filePath}"`, (err, stdout, stderr) => {
    if (err) {
      reject(console.error('Error compressing file:', stderr));
    }

    resolve(outputArchive.split('dist/')[1]);
  });
}
