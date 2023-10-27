import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCompanyComponent } from './our-company.component';

describe('OurCompanyComponent', () => {
  let component: OurCompanyComponent;
  let fixture: ComponentFixture<OurCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurCompanyComponent]
    });
    fixture = TestBed.createComponent(OurCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
