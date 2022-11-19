import { Component, OnInit } from '@angular/core';
import {catchError, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {MatTableDataSource} from "@angular/material/table";
import {Rented} from "../../../../shared/models/rented.model";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";
import {RentedService} from "../../../../data-access/services/rented.service";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-rented-bouncy-house',
  templateUrl: './rented-bouncy-house.page.html',
  styleUrls: ['./rented-bouncy-house.page.scss']
})
export class RentedBouncyHousePage implements OnInit {

  appState$!: Observable<AppState<CustomResponse>>
  dataSource = new MatTableDataSource<Rented>;
  readonly DataState = DataStateEnum

  bouncyHouseId!: number

  constructor(private rentedService: RentedService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.bouncyHouseId = params?.['id'];
    });

    this.appState$ = this.rentedService.rentedByBounceHouse$(this.bouncyHouseId)
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
