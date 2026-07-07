import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import type { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('fetch-req{/:id}')
  fetchReq(@Req() req: Request) {
    const {id} = req.params;
    const queryParams = req.query;
    const userAgent = req.headers['user-agent'];
    return {
      id,
      queryParams,
      userAgent,
    };
  }
}
