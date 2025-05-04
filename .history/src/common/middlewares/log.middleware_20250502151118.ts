import { Injectable, NestMiddleware } from '@nestjs/common';
import path from 'path';

@Injectable()
export class CustomMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void) {
    const pathRoot = path.resolve(__dirname, '..', 'logs');
    next();
  }
}
