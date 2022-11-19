import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteBarComponent } from './favourite-bar.component';

describe('FavouriteBarComponent', () => {
  let component: FavouriteBarComponent;
  let fixture: ComponentFixture<FavouriteBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
