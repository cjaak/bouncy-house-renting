import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BouncyHousePage} from "./feature/bouncy-house/pages/bouncy-house/bouncy-house.page";
import {UserPage} from "./feature/user/pages/user/user.page";
import {RentedActivePage} from "./feature/rented/pages/rented-active/rented-active.page";
import {RentedAllPage} from "./feature/rented/pages/rented-all/rented-all.page";
import {RentedNewPage} from "./feature/rented/pages/rented-new/rented-new.page";
import {RentedBouncyHousePage} from "./feature/rented/pages/rented-bouncy-house/rented-bouncy-house.page";
import {LoginPage} from "./feature/auth/pages/login/login.page";
import {AuthGuard} from "./shared/gurads/auth.guard";


const routes: Routes = [
  { path: '', component: LoginPage},
  {
    path: 'bouncy-house',
    component: BouncyHousePage,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UserPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'rented/active',
    component: RentedActivePage,
    canActivate: [AuthGuard]
  },
  {
    path: 'rented/all',
    component: RentedAllPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'rented/new',
    component: RentedNewPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'rented/bouncy-house/:id',
    component: RentedBouncyHousePage,
    canActivate: [AuthGuard]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
