import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private product: Product [] = [];

  insertProduct(title: string, desc: string, price: number) {
    const id = new Date().toString();
    const newProduct = new Product(id, title, desc, price);
    this.product.push(newProduct);
    return id;
  }

  getProducts() {
    return [...this.product];
  }
}
