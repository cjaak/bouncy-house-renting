import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritePage } from './pages/favourite/favourite.page';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [FavouritePage],
  imports: [CommonModule, SharedModule, MatButtonModule, RouterLink],
})
export class FavouriteModule {}
