import { exec } from 'child_process';

export function compression(filePath: string) {
  const outputPath = 'compressed.7z';

  exec(`7z a -mx=9 ${outputPath} ${filePath}`, (err, stdout, stderr) => {
    if (err) {
      console.error('Error compressing file:', stderr);
    } else {
      console.log('File compressed:', stdout);
    }
  });
}
