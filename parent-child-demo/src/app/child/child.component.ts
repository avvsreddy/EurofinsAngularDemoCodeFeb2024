import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  onSend(data: string) {
    //alert(data)
    //if(this.toParent)
      this.toParent.emit(data);
  }
  @Output()
  toParent: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  fromParent: string = '';
}
