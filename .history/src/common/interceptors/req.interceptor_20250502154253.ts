import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class RequestInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    return next.handle().pipe(
      tap(() => {
        const isPath = path.resolve(__dirname, '..', 'logs');
        const pathRoot = path.join(__dirname, '..', 'logs', 'req.info.txt');
        if (!fs.existsSync(isPath)) {
          fs.mkdirSync(isPath, { recursive: true });
        }
        const now = new Date().toISOString();
        const log = `TIME: [${now}], METHOD: [${req.method}], URL: [${req.baseUrl}], STATUS: [${res.status}] IP: [${req.ip}]\n`;
        fs.appendFileSync(pathRoot, log);
      }),
    );
  }
}
