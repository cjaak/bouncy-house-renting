import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconWithTextComponent } from './components/icon-with-text/icon-with-text.component';
import { RentedCardComponent } from './components/rented-card/rented-card.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { RatingCardComponent } from './components/rating-card/rating-card.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NavbarComponent,
    IconWithTextComponent,
    RentedCardComponent,
    SearchFilterPipe,
    SearchFilterPipe,
    FilterPipe,
    SortPipe,
    RatingCardComponent,
  ],
  exports: [
    NavbarComponent,
    IconWithTextComponent,
    RentedCardComponent,
    SearchFilterPipe,
    SortPipe,
    FilterPipe,
    RatingCardComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    NgbRatingModule,
  ],
})
export class SharedModule {}
