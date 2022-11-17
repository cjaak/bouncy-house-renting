import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BouncyHousePage} from "./feature/bouncy-house/pages/bouncy-house/bouncy-house.page";
import {UserPage} from "./feature/user/pages/user/user.page";
import {RentedActivePage} from "./feature/rented/pages/rented-active/rented-active.page";
import {RentedAllPage} from "./feature/rented/pages/rented-all/rented-all.page";
import {RentedNewPage} from "./feature/rented/pages/rented-new/rented-new.page";


const routes: Routes = [
  { path: '', component: BouncyHousePage},
  {
    path: 'bouncy-house',
    component: BouncyHousePage
  },
  {
    path: 'user',
    component: UserPage
  },
  {
    path: 'rented/active',
    component: RentedActivePage
  },
  {
    path: 'rented/all',
    component: RentedAllPage
  },
  {
    path: 'rented/new',
    component: RentedNewPage
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
