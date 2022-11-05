import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentedActivePage } from './pages/rented-active/rented-active.page';
import {SharedModule} from "../../shared/shared.module";
import { RentedTableComponent } from './components/rented-table/rented-table.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";



@NgModule({
  declarations: [
    RentedActivePage,
    RentedTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule
  ]
})
export class RentedModule { }
