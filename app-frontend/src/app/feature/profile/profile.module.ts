import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePage } from './pages/profile/profile.page';
import {SharedModule} from "../../shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ProfileBarComponent } from './components/profile-bar/profile-bar.component';
import {MatCardModule} from "@angular/material/card";
import { RentedListComponent } from './components/rented-list/rented-list.component';



@NgModule({
  declarations: [
    ProfilePage,
    ProfileBarComponent,
    RentedListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class ProfileModule { }
