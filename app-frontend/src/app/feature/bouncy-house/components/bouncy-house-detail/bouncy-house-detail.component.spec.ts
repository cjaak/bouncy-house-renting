import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncyHouseDetailComponent } from './bouncy-house-detail.component';

describe('BouncyHouseDetailComponent', () => {
  let component: BouncyHouseDetailComponent;
  let fixture: ComponentFixture<BouncyHouseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouncyHouseDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouncyHouseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
