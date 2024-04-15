import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { Observable } from 'rxjs';

// define the token
import { InjectionToken } from '@angular/core';
//import { IService } from './IService'; // Import your IService interface

export const IServiceToken = new InjectionToken<IService>('IService');




export interface IService{
  getProducts():Observable<any>;
}

@Injectable({
  providedIn:'root'
})
//  {
//    providedIn: 'root'
//  })
export class ApifacadeService implements IService{

  constructor(private http:HttpClient) { }
products!:Observable<any>;
  getProducts(){
    
   return  this.http.get<Observable<any>>('http://localhost:3000/products');//.subscribe(res => {
//this.products = res;
//debugger
//return this.products;
    //}
  //);
  }
  // getProducts(){
  //   return [{id:111, name:'IPhone 10',price:10000},
  //   {id:222, name:'IPhone 12',price:20000},
  //   {id:333, name:'IPhone 13',price:30000}
  //   ];
  //   }

}
@Injectable({
  providedIn:'root'
})
export class MockService implements IService{


  getProducts(){

    const products = [{id:111, name:'Mock Product 111',price:1000},
    {id:222, name:'Mock Product 222',price:2000},
    {id:333, name:'Mock Product 333',price:3000}
    ];
    return of( products);
    }

}


