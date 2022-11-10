import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentingPage } from './pages/renting/renting.page';
import { RentingFormComponent } from './components/renting-form/renting-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    RentingPage,
    RentingFormComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        MatFormFieldModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatToolbarModule
    ]
})
export class RentingModule { }
