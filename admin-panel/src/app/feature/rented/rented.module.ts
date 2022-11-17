import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentedActivePage } from './pages/rented-active/rented-active.page';
import {SharedModule} from "../../shared/shared.module";
import { RentedTableComponent } from './components/rented-table/rented-table.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import { BouncyHouseDetailComponent } from './components/bouncy-house-detail/bouncy-house-detail.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { RentedAllPage } from './pages/rented-all/rented-all.page';
import { RentedNewPage } from './pages/rented-new/rented-new.page';



@NgModule({
  declarations: [
    RentedActivePage,
    RentedTableComponent,
    BouncyHouseDetailComponent,
    RentedAllPage,
    RentedNewPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class RentedModule { }
