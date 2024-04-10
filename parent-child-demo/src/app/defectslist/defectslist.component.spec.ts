import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectslistComponent } from './defectslist.component';

describe('DefectslistComponent', () => {
  let component: DefectslistComponent;
  let fixture: ComponentFixture<DefectslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefectslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefectslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
