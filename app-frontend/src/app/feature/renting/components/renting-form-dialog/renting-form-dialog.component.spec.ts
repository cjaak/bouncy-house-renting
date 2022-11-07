import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingFormDialogComponent } from './renting-form-dialog.component';

describe('RentingFormDialogComponent', () => {
  let component: RentingFormDialogComponent;
  let fixture: ComponentFixture<RentingFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentingFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentingFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
