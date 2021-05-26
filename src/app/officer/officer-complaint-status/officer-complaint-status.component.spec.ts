import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerComplaintStatusComponent } from './officer-complaint-status.component';

describe('OfficerComplaintStatusComponent', () => {
  let component: OfficerComplaintStatusComponent;
  let fixture: ComponentFixture<OfficerComplaintStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerComplaintStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerComplaintStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
