import { Controller, Get, Post, Put, Patch, Header, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.model';

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

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getProduct(@Param('id') pId: string) {
    return {
      status: 1,
      data: this.productService.getProduct(pId)
    }
  }

  @Post()
  @Header('Content-Type', 'application/json')
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

  @Put(':id')
  @Header('Content-Type', 'application/json')
  updateProduct(@Param('id') id: string, @Body() productData: Product) {
    const updatedProduct = this.productService.updateProduct(id, productData);
    return {
      status: 1,
      data: updatedProduct
    };
  }

  @Patch(':id')
  @Header('Content-Type', 'application/json')
  partialUpdate(@Param('id') id: string, @Body() productData: Product) {
    const updatedProduct = this.productService.partialUpdate(id, productData);
    return {
      status: 1,
      data: updatedProduct
    };
  }

}
