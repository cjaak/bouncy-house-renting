import { Component, OnInit } from '@angular/core';
import {catchError, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {MatTableDataSource} from "@angular/material/table";
import {BouncyHouse} from "../../../../shared/models/bouncy-house.model";
import {Rented} from "../../../../shared/models/rented.model";
import {map} from "rxjs/operators";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";
import {RentedService} from "../../../../data-access/services/rented.service";

@Component({
  selector: 'app-rented-active',
  templateUrl: './rented-active.page.html',
  styleUrls: ['./rented-active.page.scss']
})
export class RentedActivePage implements OnInit {

  appState$!: Observable<AppState<CustomResponse>>
  activeDataSource = new MatTableDataSource<Rented>;
  readonly DataState = DataStateEnum

  constructor(private rentedService: RentedService) { }

  ngOnInit(): void {
    this.appState$ = this.rentedService.rentedActive$
      .pipe(
        map(response => {
          this.activeDataSource = new MatTableDataSource(response.data.rented)

          return { dataState: DataStateEnum.LOADED_STATE, appData: response }
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )

  }

}
