import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home/home.page';
import {SharedModule} from "../../shared/shared.module";
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { BouncyHouseListComponent } from './components/bouncy-house-list/bouncy-house-list.component';
import { BouncyHouseCardComponent } from './components/bouncy-house-card/bouncy-house-card.component';
import {MatCardModule} from "@angular/material/card";
import {RouterLink, RouterLinkWithHref} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HomePage,
    FilterBarComponent,
    BouncyHouseListComponent,
    BouncyHouseCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    RouterLinkWithHref,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class HomeModule { }
