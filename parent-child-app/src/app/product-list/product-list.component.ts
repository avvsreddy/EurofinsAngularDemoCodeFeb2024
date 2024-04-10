import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  addToCart(item: IProduct) {
    // alert(JSON.stringify(this.productsList));

     const prod = this.productsList.find(p => p.name === item.name );
    //const prod = this.productsList.filter(p => p.name === item.name )[0];
   
    //alert(prod);
    if (prod) {
      prod.name = prod.name + ' added to cart';
      //alert(`item ${prod.name}`);
    }
  }
  ngOnInit(): void {
    this.productsList.push({
      id: this.productsList.length + 1,
      name: 'iPhone 10',
      price: 55555,
    });
    this.productsList.push({
      id: this.productsList.length + 1,
      name: 'iPhone 11',
      price: 66666,
    });
    this.productsList.push({
      id: this.productsList.length + 1,
      name: 'iPhone 12',
      price: 77777,
    });
  }

  productsList: IProduct[] = [];
}
