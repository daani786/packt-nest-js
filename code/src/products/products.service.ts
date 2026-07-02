import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private product: Product [] = [];

  insertProduct(title: string, desc: string, price: number) {
    const id = Math.floor(Math.random() * Date.now()).toString(16);
    const newProduct = new Product(id, title, desc, price);
    this.product.push(newProduct);
    return id;
  }

  getProducts() {
    return [...this.product];
  }

  getProduct(prodId: string) {
    const [product] = this.findProduct(prodId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return {...product};
  }

  updateProduct(
    id: string, 
    productData : {
      title?: string;
      description?: string;
      price?: number;
    },
  ) {
    const [product, index] = this.findProduct(id);
    const updatedProduct = {
      title: productData.title !== undefined ? productData.title : "",
      description: productData.description !== undefined ? productData.description : "",
      price: productData.price !== undefined ? productData.price : 0,
    };
    this.product[index] =  {...product, ...updatedProduct};
    return  {...product, ...updatedProduct};
  }

  partialUpdate(
    id: string, 
    productData : {
      title?: string;
      description?: string;
      price?: number;
    },
  ) {
    const [product, index] = this.findProduct(id);
    const updatedProduct = {
      ...product,
      ...productData
    };
    this.product[index] =  updatedProduct;
    return updatedProduct;
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.product.findIndex((prod) => prod.id === id);
    if (productIndex === -1) {
      throw new NotFoundException('Product not found');
    }
    return [this.product[productIndex], productIndex];
  }
}
