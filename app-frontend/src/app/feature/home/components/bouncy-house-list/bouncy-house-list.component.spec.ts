import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncyHouseListComponent } from './bouncy-house-list.component';

describe('BouncyHouseListComponent', () => {
  let component: BouncyHouseListComponent;
  let fixture: ComponentFixture<BouncyHouseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouncyHouseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouncyHouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
