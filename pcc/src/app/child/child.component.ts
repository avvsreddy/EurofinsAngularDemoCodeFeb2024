import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  sendData() {
    this.dataToParentEvent.emit('this is from child');
  }
  @Input()
  dataFromParent: string = '';

  @Output()
  dataToParentEvent = new EventEmitter<string>();
}


