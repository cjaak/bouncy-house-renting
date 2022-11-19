import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedAllPage } from './rented-all.page';

describe('RentedAllPage', () => {
  let component: RentedAllPage;
  let fixture: ComponentFixture<RentedAllPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedAllPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
