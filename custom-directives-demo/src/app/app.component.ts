import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { CustomhighlighterDirective } from './directives/customhighlighter.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HighlightDirective, CustomhighlighterDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'custom-directives-demo';
}
