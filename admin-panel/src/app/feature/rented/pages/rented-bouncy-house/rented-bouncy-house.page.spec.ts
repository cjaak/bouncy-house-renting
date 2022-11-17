import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedBouncyHousePage } from './rented-bouncy-house.page';

describe('RentedBouncyHousePage', () => {
  let component: RentedBouncyHousePage;
  let fixture: ComponentFixture<RentedBouncyHousePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedBouncyHousePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedBouncyHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
