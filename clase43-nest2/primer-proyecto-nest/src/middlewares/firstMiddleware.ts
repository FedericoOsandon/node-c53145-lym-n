import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export default class FirstMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction){ 
        console.log( `${req.method} at ${req.url} received`)
        next()
    }
}