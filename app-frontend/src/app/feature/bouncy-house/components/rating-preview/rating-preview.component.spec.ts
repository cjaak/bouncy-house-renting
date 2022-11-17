import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPreviewComponent } from './rating-preview.component';

describe('RatingPreviewComponent', () => {
  let component: RatingPreviewComponent;
  let fixture: ComponentFixture<RatingPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
