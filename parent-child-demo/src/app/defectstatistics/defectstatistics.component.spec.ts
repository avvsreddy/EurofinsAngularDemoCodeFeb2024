import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectstatisticsComponent } from './defectstatistics.component';

describe('DefectstatisticsComponent', () => {
  let component: DefectstatisticsComponent;
  let fixture: ComponentFixture<DefectstatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefectstatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefectstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
