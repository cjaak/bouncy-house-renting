import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritePage } from './pages/favourite/favourite.page';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { BouncyHouseListComponent } from './components/bouncy-house-list/bouncy-house-list.component';
import { FavouriteBarComponent } from './components/favourite-bar/favourite-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmptyFavouritesComponent } from './components/empty-favourites/empty-favourites.component';

@NgModule({
  declarations: [
    FavouritePage,
    BouncyHouseListComponent,
    FavouriteBarComponent,
    EmptyFavouritesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    RouterLink,
    SharedModule,
    MatToolbarModule,
  ],
})
export class FavouriteModule {}
