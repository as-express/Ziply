import { Injectable, NestMiddleware } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class CustomMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void) {
    const pathRoot = path.resolve(__dirname, '..', 'logs');
    if (!fs.existsSync(pathRoot)) {
      fs.mkdirSync(pathRoot, { recursive: true });
    }

    fs.writeFileSync(pathRoot, '');

    next();
  }
}
