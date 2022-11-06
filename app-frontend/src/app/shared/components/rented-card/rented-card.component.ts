import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {Rented} from "../../models/rented.model";
import {BouncyHouse} from "../../models/bouncy-house.model";
import {BouncyHouseService} from "../../../data-access/services/bouncy-house.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../interfaces/app-state";
import {CustomResponse} from "../../interfaces/custom-response";
import {DataStateEnum} from "../../enums/data-state.enum";

@Component({
  selector: 'app-rented-card',
  templateUrl: './rented-card.component.html',
  styleUrls: ['./rented-card.component.scss']
})
export class RentedCardComponent implements OnInit {

  appState$!: Observable<AppState<CustomResponse>>
  readonly DataState = DataStateEnum

  @Input() rented!: Rented

  bouncyHouse!: BouncyHouse

  constructor(private bouncyHouseService: BouncyHouseService) { }

  ngOnInit(): void {
    console.log(this.rented)
    this.appState$ = this.bouncyHouseService.get$(this.rented.bouncyHouseId)
      .pipe(
        map(response => {
          this.bouncyHouse = response.data.bouncy_house
          console.log(this.bouncyHouse)
          return { dataState: DataStateEnum.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
  }

}
