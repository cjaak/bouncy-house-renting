import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentingPage } from './pages/renting/renting.page';
import { RentingFormDialogComponent } from './components/renting-form-dialog/renting-form-dialog.component';



@NgModule({
  declarations: [
    RentingPage,
    RentingFormDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RentingModule { }
