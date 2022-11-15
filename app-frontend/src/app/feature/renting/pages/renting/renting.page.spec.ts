import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingPage } from './renting.page';

describe('RentingPage', () => {
  let component: RentingPage;
  let fixture: ComponentFixture<RentingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RentingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
