import { Component, Inject, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApifacadeService, IService, IServiceToken, MockService } from './service/apifacade.service';
import {Observable} from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //providers:[ApifacadeService]
})
export class AppComponent implements OnInit {
  products$!: Observable<any>;
  products!: any;
  //service:IService = new ApifacadeService();
  //service:IService = inject(ApifacadeService);
  //constructor(public products$: Observable<any[]>, private service:ApifacadeService){}
   //constructor(private service:ApifacadeService){}
  //constructor(private service:MockService){}
  constructor(@Inject(IServiceToken) private service:IService){}
  ngOnInit(): void {
   //this.service.getProducts().subscribe(res => {
    //this.products = res;
    
//this.service.getProducts().subscribe(res => {this.products=res;});
//debugger
    this.products$ = this.service.getProducts();
    //});
}
}

 

