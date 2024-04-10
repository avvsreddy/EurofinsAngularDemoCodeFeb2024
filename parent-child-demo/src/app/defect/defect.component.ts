import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDefect } from '../models/IDefects';

@Component({
  selector: 'app-defect',
  standalone: true,
  imports: [],
  templateUrl: './defect.component.html',
  styleUrl: './defect.component.css',
})
export class DefectComponent {
  onBtnClick() {
    this.onDefectResolve.emit(this.defect);
  }

  @Input()
  defect?: IDefect;

  @Output()
  onDefectResolve: EventEmitter<IDefect> = new EventEmitter<IDefect>();
}
