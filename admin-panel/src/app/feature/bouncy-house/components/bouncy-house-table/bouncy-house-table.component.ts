import {Component, OnInit} from '@angular/core';
import {BouncyHouseService} from "../../../../data-access/services/bouncy-house.service";
import {BouncyHouseFormComponent} from "../bouncy-house-form/bouncy-house-form.component";
import {MatDialog} from "@angular/material/dialog";
import {BouncyHouse} from "../../../../shared/models/bouncy-house.model";
import {BehaviorSubject, catchError, Observable, of, startWith} from "rxjs";
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

  // @ts-ignore
  private dataSubject = new BehaviorSubject<CustomResponse>(null)

  constructor(private bouncyHouseService: BouncyHouseService, private dialog: MatDialog) { }


  displayedColumns: string[] = ['id',"image", 'name', 'price_per_day', 'size', 'theme', 'weight', 'delete'];

  ngOnInit(): void {
    this.appState$ = this.bouncyHouseService.bouncyHouses$
      .pipe(
        map(response => {
          this.dataSubject.next(response);
          return { dataState: DataStateEnum.LOADED_STATE, appData: {...response, data: {bouncy_houses: response.data.bouncy_houses.reverse()} }}
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

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.saveBouncyHouse(result as BouncyHouse)
      }
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
          this.dataSubject.next(
            {...response, data:
                { bouncy_houses: this.dataSubject.value.data.bouncy_houses.filter((b: BouncyHouse) => b.id !== element.id)}}
          )
          return { dataState: DataStateEnum.LOADED_STATE, appData: this.dataSubject.value}
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE, appData: this.dataSubject.value}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
  }

  saveBouncyHouse(house: BouncyHouse): void {
    this.appState$ = this.bouncyHouseService.save$(house)
      .pipe(
        map(response => {
          this.dataSubject.next(
            {...response, data: { bouncy_houses: [response.data.bouncy_house, ...this.dataSubject.value.data.bouncy_houses] }}
          );
          return { dataState: DataStateEnum.LOADED_STATE, appData: this.dataSubject.value}
        }),
        startWith({dataState: DataStateEnum.LOADED_STATE, appData: this.dataSubject.value}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
  }

}
