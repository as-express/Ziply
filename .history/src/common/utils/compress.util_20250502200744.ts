import { exec } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

export function compression(filePath: string) {
  const outputPath = ;

  exec(`7z a -mx=9 ${outputPath} ${filePath}`, (err, stdout, stderr) => {
    if (err) {
      console.error('Error compressing file:', stderr);
    } else {
      console.log('File compressed:', stdout);
    }
  });
}
