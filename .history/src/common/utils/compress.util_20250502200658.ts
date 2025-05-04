import { exec } from 'child_process';

const filePath = 'yourfile.txt';
const outputPath = 'compressed.7z';

export function compression(filePath: string) {
  exec(`7z a -mx=9 ${outputPath} ${filePath}`, (err, stdout, stderr) => {
    if (err) {
      console.error('Error compressing file:', stderr);
    } else {
      console.log('File compressed:', stdout);
    }
  });
}
