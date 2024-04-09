import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  onAddToCart() {
    this.AddToCartEvent.emit(this.product);
  }

  // from parent
  @Input()
  product?: IProduct;

  @Output() AddToCartEvent = new EventEmitter<IProduct>();



}
