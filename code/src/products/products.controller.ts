import { Controller, Get, Header, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  @Header('Content-Type', 'test/html')
  getProducts(): any {
    return 'Products Controller';
  }

  @Post
  addProducts(
    @Body('title') pTitle: string, 
    @Body('description') pDesc: string, 
    @Body('price') pPrice: number
  ) { 
    const returnedId = this.productService.insertProduct(pTitle, pDesc, pPrice);
    return {id: returnedId, message: 'Product added successfully'};
  }

}
