import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentingPage } from './pages/renting/renting.page';
import { RentingDetailComponent } from './components/renting-detail/renting-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { RentingFormComponent } from './components/renting-form/renting-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [RentingPage, RentingDetailComponent, RentingFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatDatepickerModule,
    SharedModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgbRatingModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterLink,
  ],
})
export class RentingModule {}
