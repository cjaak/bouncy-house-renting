import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './feature/profile/pages/profile/profile.page';
import { HomePage } from './feature/home/pages/home/home.page';
import { FavouritePage } from './feature/favourite/pages/favourite/favourite.page';
import { BouncyHousePage } from './feature/bouncy-house/pages/bouncy-house/bouncy-house.page';
import { AuthPage } from './feature/auth/pages/auth/auth.page';
import { RentingPage } from './feature/renting/pages/renting/renting.page';
import { RentingDetailComponent } from './feature/renting/components/renting-detail/renting-detail.component';
import { AuthGuard } from './shared/gurads/auth.guard';

const routes: Routes = [
  { path: 'profile', component: ProfilePage, canActivate: [AuthGuard] },
  { path: 'home', component: HomePage },
  { path: 'favourite', component: FavouritePage, canActivate: [AuthGuard] },
  {
    path: 'bouncy-house/:id',
    component: BouncyHousePage,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'renting/:id',
    component: RentingPage,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'rented',
    component: RentingDetailComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: 'auth', component: AuthPage },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
