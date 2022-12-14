import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BouncyHousePage } from './pages/bouncy-house/bouncy-house.page';
import { BouncyHouseFormComponent } from './components/bouncy-house-form/bouncy-house-form.component';
import { BouncyHouseTableComponent } from './components/bouncy-house-table/bouncy-house-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BouncyHouseFilterComponent } from './components/bouncy-house-filter/bouncy-house-filter.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    BouncyHousePage,
    BouncyHouseFormComponent,
    BouncyHouseTableComponent,
    BouncyHouseFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSortModule,
    MatSliderModule,
    MatIconModule,
    RouterLink
  ]
})
export class BouncyHouseModule { }
