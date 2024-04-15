import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'json-server-demo';
}
