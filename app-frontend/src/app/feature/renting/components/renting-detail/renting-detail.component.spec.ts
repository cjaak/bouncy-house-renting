import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingDetailComponent } from './renting-detail.component';

describe('RentingDetailComponent', () => {
  let component: RentingDetailComponent;
  let fixture: ComponentFixture<RentingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentingDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RentingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
