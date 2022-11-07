import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";
import {RentedService} from "../../../../data-access/services/rented.service";

@Component({
  selector: 'app-renting',
  templateUrl: './renting.page.html',
  styleUrls: ['./renting.page.scss']
})
export class RentingPage implements OnInit {

  bouncyHouseId!: number

  appState$!: Observable<AppState<CustomResponse>>
  readonly DataState = DataStateEnum

  constructor(private route: ActivatedRoute, private rentedService: RentedService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
			this.bouncyHouseId = params?.['id']
		})

    this.appState$ = this.rentedService.RentedByBouncyHouse$(this.bouncyHouseId)
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
