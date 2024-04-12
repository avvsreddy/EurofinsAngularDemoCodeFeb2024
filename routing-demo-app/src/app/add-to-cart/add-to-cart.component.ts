import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent  implements OnInit {
  

  
constructor(private activatedRoute: ActivatedRoute ){}


  ngOnInit(): void {
    
//id:1;
// let id = this.activatedRoute.snapshot.params['id']
let id = this.activatedRoute.snapshot.paramMap.get('id')
alert(id)
  }




}
