import { Injectable, NestMiddleware } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class CustomMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void) {
    const isPath = path.resolve(__dirname, '..', 'logs');
    const pathRoot = path.resolve(__dirname, '..', 'logs', 'req.info.txt');

    if (!fs.existsSync(pathRoot)) {
      fs.mkdirSync(pathRoot, { recursive: true });
    }

    const now = new Date().toISOString();

    const log = `TIME: [${now}], METHOD: [${req.method}], URL: [${req.url}], STATUS: [${res.status}] IP: [${req.ip}]`;
    fs.writeFileSync(pathRoot, log);

    next();
  }
}
