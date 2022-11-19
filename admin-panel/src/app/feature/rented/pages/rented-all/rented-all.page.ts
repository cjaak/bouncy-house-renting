import { Component, OnInit } from '@angular/core';
import {catchError, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {MatTableDataSource} from "@angular/material/table";
import {Rented} from "../../../../shared/models/rented.model";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";
import {RentedService} from "../../../../data-access/services/rented.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-rented-all',
  templateUrl: './rented-all.page.html',
  styleUrls: ['./rented-all.page.scss']
})
export class RentedAllPage implements OnInit {

  appState$!: Observable<AppState<CustomResponse>>
  dataSource = new MatTableDataSource<Rented>;
  readonly DataState = DataStateEnum

  constructor(private rentedService: RentedService) { }

  ngOnInit(): void {
    this.appState$ = this.rentedService.rented$
      .pipe(
        map(response => {
          this.dataSource = new MatTableDataSource(response.data.rented)

          return { dataState: DataStateEnum.LOADED_STATE, appData: response }
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )

  }
}
