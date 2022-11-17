import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPage } from './pages/cart/cart.page';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [CartPage],
  imports: [CommonModule, SharedModule, MatButtonModule, RouterLink],
})
export class CartModule {}
