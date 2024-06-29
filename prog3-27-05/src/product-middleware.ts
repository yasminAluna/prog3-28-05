import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ProductMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const originalSend = res.send;
    res.send = function(data: any) {
      if (data.price) {
        data.price *= 1.15;
      }
      return originalSend.call(this, data);
    };
    next();
  }
}
