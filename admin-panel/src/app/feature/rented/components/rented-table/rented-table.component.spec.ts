import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedTableComponent } from './rented-table.component';

describe('RentedTableComponent', () => {
  let component: RentedTableComponent;
  let fixture: ComponentFixture<RentedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
