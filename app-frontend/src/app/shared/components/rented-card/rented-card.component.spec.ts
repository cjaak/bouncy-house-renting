import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedCardComponent } from './rented-card.component';

describe('RentedCardComponent', () => {
  let component: RentedCardComponent;
  let fixture: ComponentFixture<RentedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentedCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RentedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
