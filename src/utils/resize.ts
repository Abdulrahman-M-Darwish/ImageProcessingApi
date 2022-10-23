import path from 'path';
import sharp from 'sharp';
import { hasCache, addToCache, getCache } from '../utils/cache';

const resize = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  if (!filename) {
    throw new Error('please fill the filename');
  }
  const outPath = path.resolve('./') + '/output/' + 'new-' + filename + '.jpg';
  if (hasCache(`${filename}-${width}x${height}`)) {
    return getCache(`${filename}-${width}x${height}`) as string;
  }
  await sharp(path.resolve('./') + '/images/' + filename + '.jpg')
    .resize({
      width,
      height,
    })
    .toFile(outPath);
  addToCache(`${filename}-${width}x${height}`, outPath, 300);
  return outPath;
};

export default resize;
