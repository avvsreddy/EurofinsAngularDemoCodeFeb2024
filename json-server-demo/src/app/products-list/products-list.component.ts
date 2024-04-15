import { Component, Inject,  OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IServiceClient, ServiceClient, token } from '../Service/ServiceClient.Service';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {

productsList!:IProduct[];
//private serviceClient = inject(ServiceClient);
constructor(@Inject(token) private serviceClient:IServiceClient){}
//private sericeClient = new ServiceClient();

  
ngOnInit(): void {
    this.serviceClient.getProducts().subscribe( data => {
        this.productsList = data;
    });
  }





}
