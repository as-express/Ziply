import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class IdentifyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: Error | any) => void) {
    let userId = req.cookies.userId;
    if (!userId) {
      userId = uuidv4();

      res.cookie('userId', userId, {
        maxAge: 365 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'none',
      });
    }

    req.userId = userId;
    next();
  }
}
