import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const CustomDecorator = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest() as Request;
    return req.body;
  },
);
