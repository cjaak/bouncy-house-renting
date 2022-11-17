import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingFormComponent } from './renting-form.component';

describe('RentingFormComponent', () => {
  let component: RentingFormComponent;
  let fixture: ComponentFixture<RentingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentingFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RentingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
