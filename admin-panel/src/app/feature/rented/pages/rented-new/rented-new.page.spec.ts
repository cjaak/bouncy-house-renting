import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedNewPage } from './rented-new.page';

describe('RentedNewPage', () => {
  let component: RentedNewPage;
  let fixture: ComponentFixture<RentedNewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedNewPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
