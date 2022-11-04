import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncyHouseFilterComponent } from './bouncy-house-filter.component';

describe('BouncyHouseFilterComponent', () => {
  let component: BouncyHouseFilterComponent;
  let fixture: ComponentFixture<BouncyHouseFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouncyHouseFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouncyHouseFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
