import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/product';
import { Injectable, InjectionToken, inject } from '@angular/core';


export interface IServiceClient{
    getProducts():Observable<IProduct[]>;
}

export const token = new InjectionToken<IServiceClient>('IServiceClientToken');


@Injectable({
    providedIn:'root'
})
export class ServiceClient implements IServiceClient{
    
    private http:HttpClient = inject(HttpClient)
    //constructor(private http:HttpClient){}
    
    getProducts(){

        // get the data from api

        // discover the api endpoint
        const apiUrl:string = 'http://localhost:3000/products'

       
        return this.http.get<IProduct[]>(apiUrl);


    }

    
}

export class SampleServiceClient implements IServiceClient{
    getProducts(): Observable<IProduct[]> {
        
        const products: IProduct[] = [
            {
            id: 1,
            name: "Sample Smartphone 1",
            description: "A powerful smartphone with advanced features.",
            price: 599.99,
            brand: "TechCo",
            category: "Electronics"
        },{
            id: 1,
            name: "Sample Smartphone 2",
            description: "A powerful smartphone with advanced features.",
            price: 599.99,
            brand: "TechCo",
            category: "Electronics"
        },
        {
            id: 1,
            name: "Sample Smartphone 3",
            description: "A powerful smartphone with advanced features.",
            price: 599.99,
            brand: "TechCo",
            category: "Electronics"
        }

    ];

        return of(products)

    }

}