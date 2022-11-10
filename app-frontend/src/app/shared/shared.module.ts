import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import { IconWithTextComponent } from './components/icon-with-text/icon-with-text.component';
import { RentedCardComponent } from './components/rented-card/rented-card.component';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
    declarations: [
        NavbarComponent,
        IconWithTextComponent,
        RentedCardComponent,
        SearchFilterPipe,
        SearchFilterPipe,
        SortPipe
    ],
    exports: [
        NavbarComponent,
        IconWithTextComponent,
        RentedCardComponent,
        SearchFilterPipe,
        SortPipe
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
