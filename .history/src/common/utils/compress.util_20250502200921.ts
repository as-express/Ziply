import { exec } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

type folder = 'files' | 'images';
export function compression(filePath: string, folder) {
  const outputPath = path.join(__dirname, '..', '..', '..', 'compressed');

  exec(`7z a -mx=9 ${outputPath} ${filePath}`, (err, stdout, stderr) => {
    if (err) {
      console.error('Error compressing file:', stderr);
    } else {
      console.log('File compressed:', stdout);
    }
  });
}
