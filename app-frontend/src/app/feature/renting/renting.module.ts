import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentingPage } from './pages/renting/renting.page';
import { RentingFormComponent } from './components/renting-form/renting-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    RentingPage,
    RentingFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class RentingModule { }
