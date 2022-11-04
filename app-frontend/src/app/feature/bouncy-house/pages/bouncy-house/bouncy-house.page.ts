import { Component, OnInit } from '@angular/core';
import {BouncyHouseService} from "../../../../data-access/services/bouncy-house.service";
import {BouncyHouse} from "../../../../shared/models/bouncy-house.model";
import {ActivatedRoute} from "@angular/router";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";

@Component({
  selector: 'app-bouncy-house',
  templateUrl: './bouncy-house.page.html',
  styleUrls: ['./bouncy-house.page.scss']
})
export class BouncyHousePage implements OnInit {

  appState$!: Observable<AppState<CustomResponse>>
  readonly DataState = DataStateEnum

  id!: number
  productItem?: BouncyHouse

  constructor(private bouncyHouseService: BouncyHouseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
			this.id = params?.['id']
		})

    this.appState$ = this.bouncyHouseService.get$(this.id).pipe(
        map(response => {
          this.productItem = response.data.bouncy_house
          return { dataState: DataStateEnum.LOADED_STATE, appData: {...response, data: {bouncy_house: response.data.bouncy_house} }}
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
  }

}
