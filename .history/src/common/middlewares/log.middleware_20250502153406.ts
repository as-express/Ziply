import { Injectable, NestMiddleware } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Request, Response } from 'express';

@Injectable()
export class CustomMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: Error | any) => void) {
    const isPath = path.resolve(__dirname, '..', 'logs');
    const pathRoot = path.join(__dirname, '..', 'logs', 'req.info.txt');

    if (!fs.existsSync(isPath)) {
      fs.mkdirSync(isPath, { recursive: true });
    }

    const now = new Date().toISOString();

    const log = `TIME: [${now}], METHOD: [${req.method}], URL: [${req.url}], STATUS: [${res.statusCode}] IP: [${req.ip}]\n`;
    fs.appendFileSync(pathRoot, log);

    next();
  }
}
