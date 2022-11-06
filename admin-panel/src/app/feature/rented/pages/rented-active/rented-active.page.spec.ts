import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedActivePage } from './rented-active.page';

describe('RentedActivePage', () => {
  let component: RentedActivePage;
  let fixture: ComponentFixture<RentedActivePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedActivePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedActivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
