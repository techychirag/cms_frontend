import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerReportComponent } from './officer-report.component';

describe('OfficerReportComponent', () => {
  let component: OfficerReportComponent;
  let fixture: ComponentFixture<OfficerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
