import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentingPage } from './pages/renting/renting.page';
import { RentingFormComponent } from './components/renting-form/renting-form.component';



@NgModule({
  declarations: [
    RentingPage,
    RentingFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RentingModule { }
