import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BouncyHousePage} from "./feature/bouncy-house/pages/bouncy-house/bouncy-house.page";
import {UserPage} from "./feature/user/pages/user/user.page";


const routes: Routes = [
  { path: '', component: BouncyHousePage},
  {
    path: 'bouncy-house',
    component: BouncyHousePage
  },
  {
    path: 'user',
    component: UserPage
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
