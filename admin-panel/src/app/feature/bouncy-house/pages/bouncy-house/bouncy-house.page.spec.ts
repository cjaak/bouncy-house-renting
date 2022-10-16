import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncyHousePage } from './bouncy-house.page';

describe('BouncyHousePage', () => {
  let component: BouncyHousePage;
  let fixture: ComponentFixture<BouncyHousePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouncyHousePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouncyHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
