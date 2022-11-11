import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfilePage} from "./feature/profile/pages/profile/profile.page";
import {HomePage} from "./feature/home/pages/home/home.page";
import {CartPage} from "./feature/cart/pages/cart/cart.page";
import {BouncyHousePage} from "./feature/bouncy-house/pages/bouncy-house/bouncy-house.page";
import {AuthPage} from "./feature/auth/pages/auth/auth.page";
import {RentingPage} from "./feature/renting/pages/renting/renting.page";
import {RentingDetailComponent} from "./feature/renting/components/renting-detail/renting-detail.component";

const routes: Routes = [
  { path: 'profile', component: ProfilePage},
  { path: 'home', component: HomePage},
  { path: 'cart', component: CartPage},
  { path: 'bouncy-house/:id', component: BouncyHousePage, pathMatch: 'full' },
  { path: 'renting/:id', component: RentingPage, pathMatch: 'full' },
  { path: 'rented', component: RentingDetailComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthPage },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
