import { Injectable, NestMiddleware } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Request, Response } from 'express';

@Injectable()
export class CustomMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: Error | any) => void) {
    next();
  }
}
