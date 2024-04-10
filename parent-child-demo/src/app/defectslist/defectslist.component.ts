import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IDefect } from '../models/IDefects';
import { DefectComponent } from '../defect/defect.component';
import { DefectstatisticsComponent } from '../defectstatistics/defectstatistics.component';

@Component({
  selector: 'app-defectslist',
  standalone: true,
  imports: [DefectComponent, DefectstatisticsComponent],
  templateUrl: './defectslist.component.html',
  styleUrl: './defectslist.component.css'
})
export class DefectslistComponent implements OnInit {

  onResolve(defect: IDefect) {

const defactResolved = this.defectsList.find(d => d.id == defect.id);
if(defactResolved)
{
  defactResolved.isResolved = true;
}
let defectsCount = this.defectsList.length;
let defectsResolvedCount = (this.defectsList.filter(d => d.isResolved)).length;
let defectsPendingCount = (this.defectsList.filter(d => d.isResolved == false)).length;

alert(defectsCount)
}
ngOnInit(): void {
  this.defectsList.push({
    id:this.defectsList.length + 1,
    title:'login not working',
    desc:'when user enters valid credentials, login feature not working',
    isResolved:false
  });
  this.defectsList.push({
    id:this.defectsList.length + 1,
    title:'logout not working',
    desc:'when user clicks logout button, its not logging out the user',
    isResolved:false
  });
  this.defectsList.push({
    id:this.defectsList.length + 1,
    title:'registation not working',
    desc:'when user enters valid registation details, registation feature not working',
    isResolved:false
  });

let defectsCount = this.defectsList.length;
let defectsResolvedCount = (this.defectsList.filter(d => d.isResolved)).length;
let defectsPendingCount = (this.defectsList.filter(d => d.isResolved == false)).length;
//alert(defectsCount)
}

defectsList:IDefect[] = [];

defectsCount:number = 0;
defectsResolvedCount:number = 0;
defectsPendingCount:number = 0;

}
