import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurManagementComponent } from './our-management.component';

describe('OurManagementComponent', () => {
  let component: OurManagementComponent;
  let fixture: ComponentFixture<OurManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurManagementComponent]
    });
    fixture = TestBed.createComponent(OurManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
