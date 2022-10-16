import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncyHouseFormComponent } from './bouncy-house-form.component';

describe('BouncyHouseFormComponent', () => {
  let component: BouncyHouseFormComponent;
  let fixture: ComponentFixture<BouncyHouseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouncyHouseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouncyHouseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
