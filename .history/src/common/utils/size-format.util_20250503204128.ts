function formatBytes(bytes: number): { size: number; sizeUtil: string } {
  if (bytes === 0) return { size: 0, sizeUtil: 'Bytes' };

  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = parseFloat((bytes / Math.pow(1024, i)).toFixed(2));

  return { size, sizeUtil: sizes[i] };
}
