import {Component, Input, OnInit} from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";
import {RentedService} from "../../../../data-access/services/rented.service";

@Component({
  selector: 'app-rented-list',
  templateUrl: './rented-list.component.html',
  styleUrls: ['./rented-list.component.scss']
})
export class RentedListComponent implements OnInit {

  @Input() userId!: number

  appState$!: Observable<AppState<CustomResponse>>
  readonly DataState = DataStateEnum

  constructor(private rentedService: RentedService) { }

  ngOnInit(): void {
    this.appState$ = this.rentedService.RentedByUser$(this.userId)
      .pipe(
        map(response => {
          return { dataState: DataStateEnum.LOADED_STATE, appData:  response}
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
  }

}
