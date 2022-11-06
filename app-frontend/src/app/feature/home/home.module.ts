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
import {RouterLinkWithHref} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";



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
        MatButtonModule
    ]
})
export class HomeModule { }