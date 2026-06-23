import { Controller, Get, Header } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  @Header('Content-Type', 'test/html')
  getProducts(): any {
    return {'message': 'Products Controller'};
  }

}
