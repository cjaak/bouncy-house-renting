import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentingPage } from './pages/renting/renting.page';
import { RentingDetailComponent } from './components/renting-detail/renting-detail.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {SharedModule} from "../../shared/shared.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    RentingPage,
    RentingDetailComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    SharedModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgbRatingModule
  ]
})
export class RentingModule { }
