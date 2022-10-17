import {Component, OnInit} from '@angular/core';
import {BouncyHouseService} from "../../../../data-access/services/bouncy-house.service";
import {BouncyHouseFormComponent} from "../bouncy-house-form/bouncy-house-form.component";
import {MatDialog} from "@angular/material/dialog";
import {BouncyHouse} from "../../../../shared/models/bouncy-house.model";
import {catchError, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {map} from "rxjs/operators";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";

@Component({
  selector: 'app-bouncy-house-table',
  templateUrl: './bouncy-house-table.component.html',
  styleUrls: ['./bouncy-house-table.component.scss']
})
export class BouncyHouseTableComponent implements OnInit {
appState$!: Observable<AppState<CustomResponse>>

  readonly DataState = DataStateEnum

  constructor(private bouncyHouseService: BouncyHouseService, private dialog: MatDialog) { }


  displayedColumns: string[] = ['id',"image", 'name', 'price_per_day', 'size', 'theme', 'weight', 'delete'];

  ngOnInit(): void {
    this.appState$ = this.bouncyHouseService.bouncyHouses$
      .pipe(
        map(response => {
          return { dataState: DataStateEnum.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
  }

  addItemDialog(){
    const dialogRef = this.dialog.open(BouncyHouseFormComponent, {
      data: {isEdit: false}
    })
  }

  editItemDialog(house: BouncyHouse){
    const dialogRef = this.dialog.open(BouncyHouseFormComponent, {
      data: {isEdit: true, house: house}
    })
  }

  handleDelete(element: BouncyHouse): void {
    this.appState$ = this.bouncyHouseService.delete$(element.id!)
      .pipe(
        map(response => {
          return { dataState: DataStateEnum.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
}

}
