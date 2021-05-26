import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintRegistryComponent } from './complaint-registry.component';

describe('ComplaintRegistryComponent', () => {
  let component: ComplaintRegistryComponent;
  let fixture: ComponentFixture<ComplaintRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintRegistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
