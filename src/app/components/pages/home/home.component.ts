import { Component } from '@angular/core';
import {Product} from "../../models/Product";
import {CartService} from "../../../services/cart.service";

const ROWS_HEIGHT: {[id:number]: number} = { 1: 400, 3: 335, 4: 350};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  category: string | undefined;
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];

  constructor(
      private cartService: CartService,
  ) {
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(cat: string): void {
    this.category = cat;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
