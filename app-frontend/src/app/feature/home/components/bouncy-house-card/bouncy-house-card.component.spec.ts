import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncyHouseCardComponent } from './bouncy-house-card.component';

describe('BouncyHouseCardComponent', () => {
  let component: BouncyHouseCardComponent;
  let fixture: ComponentFixture<BouncyHouseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouncyHouseCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouncyHouseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
