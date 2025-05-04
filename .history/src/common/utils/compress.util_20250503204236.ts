import { exec } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import { formatBytes } from './size-format.util';

type folderName = 'files' | 'images';

export function compression(
  filePath: string,
  folder: folderName,
): Promise<any> {
  return new Promise((resolve, reject) => {
    const outputPath = path.join(process.cwd(), 'compressed', folder);
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    const outputArchive = path.join(
      outputPath,
      `${path.basename(filePath)}.7z`,
    );

    exec(
      `7z a -mx=9 "${outputArchive}" "${filePath}"`,
      (err, stdout, stderr) => {
        if (err) {
          console.error('Error compressing file:', stderr);
          return reject(err);
        }

        const relativePath = outputArchive.split('/dd/')[1];
        const stats = fs.statSync(outputArchive);
        const { size, sizeUtil } = formatBytes(stats.size);
        const tt = { relativePath, size, sizeUtil };
        resolve(tt);
      },
    );
  });
}
