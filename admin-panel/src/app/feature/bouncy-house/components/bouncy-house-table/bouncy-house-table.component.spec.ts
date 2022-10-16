import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncyHouseTableComponent } from './bouncy-house-table.component';

describe('BouncyHouseTableComponent', () => {
  let component: BouncyHouseTableComponent;
  let fixture: ComponentFixture<BouncyHouseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouncyHouseTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouncyHouseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
