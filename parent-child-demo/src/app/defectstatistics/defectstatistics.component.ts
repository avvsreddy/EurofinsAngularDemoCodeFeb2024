import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-defectstatistics',
  standalone: true,
  imports: [],
  templateUrl: './defectstatistics.component.html',
  styleUrl: './defectstatistics.component.css'
})
export class DefectstatisticsComponent{

@Input()
defectsCount:number=0;

@Input()
defectsPendingCount:number=0;

@Input()
defectsResolvedCount:number=0;



}
