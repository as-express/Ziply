import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CustomMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void) {
    // console.log('Request...');
    next();
  }
}
