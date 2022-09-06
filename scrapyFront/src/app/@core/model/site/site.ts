import {Product} from '../product/product';

export class Site {
  name: string;
  price: string;
  productUrl: string;
  stock?: boolean;
  constructor(name?: string, price?: string, stock?: boolean, productUrl?: string ) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.productUrl = productUrl;
  }
}
