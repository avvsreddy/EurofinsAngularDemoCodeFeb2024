import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectComponent } from './defect.component';

describe('DefectComponent', () => {
  let component: DefectComponent;
  let fixture: ComponentFixture<DefectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
