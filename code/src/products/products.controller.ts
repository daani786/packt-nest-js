import { Controller, Get, Post, Header, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getProducts() {
    return {
      status: 1,
      data: this.productService.getProducts()
    }
  }

  @Post()
  addProducts(
    @Body('title') pTitle: string, 
    @Body('description') pDesc: string, 
    @Body('price') pPrice: number
  ) { 
    const returnedId = this.productService.insertProduct(pTitle, pDesc, pPrice);
    return {
      status: 1,
      id: returnedId, 
      message: 'Product added successfully'
    };
  }


}
