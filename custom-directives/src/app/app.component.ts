import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlighterDirective } from './highlighter.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlighterDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'custom-directives';
}
