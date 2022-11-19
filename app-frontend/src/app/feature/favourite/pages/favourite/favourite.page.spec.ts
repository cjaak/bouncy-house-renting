import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritePage } from './favourite.page';

describe('CartPage', () => {
  let component: FavouritePage;
  let fixture: ComponentFixture<FavouritePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouritePage],
    }).compileComponents();

    fixture = TestBed.createComponent(FavouritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
