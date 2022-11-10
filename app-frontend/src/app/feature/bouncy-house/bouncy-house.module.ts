import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BouncyHousePage } from './pages/bouncy-house/bouncy-house.page';
import {MatButtonModule} from "@angular/material/button";
import { BouncyHouseDetailComponent } from './components/bouncy-house-detail/bouncy-house-detail.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    BouncyHousePage,
    BouncyHouseDetailComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        SharedModule,
        MatToolbarModule,
        RouterLink,
        NgbRatingModule
    ]
})
export class BouncyHouseModule { }
