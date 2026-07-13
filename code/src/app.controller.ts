import { Controller, Get, Req, Res, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';
import type { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('fetch-req{/:id}')
  fetchReq(@Req() req: Request, @Res() res: Response) {
    const {id} = req.params;
    const queryParams = req.query;
    const userAgent = req.headers['user-agent'];
    // return {
    //   id,
    //   queryParams,
    //   userAgent,
    // };
    return res.status(500).send(`
      <script>
        console.log("Id: ", "${id}");
        console.log("Query Params: ", ${JSON.stringify(queryParams)});
        console.log("User Agent: ", "${userAgent}");
      </script>
    `)
    // Headers
    // res.set('Content-Type', 'application/json');
    // Cookies
    // res.cookie('user', 'adnan');
    // Redirection
    // res.redirect('/new-url');
    // Sending Files
    // res.sendFile('path/to/file.pdf');
    // Streaming Data
    // res.write('Streaming data...');

  }

  @Get('fetch-query{/:id}')
  fetchQuery(@Param('id') id: string, @Query('name') name: string, @Query('age') age: number) {
    return {
      Id: `${id}`,
      Name: `${name}`,
      Age: `${age}`
    };
  }
}
