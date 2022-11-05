import {Component, Inject, Input, OnInit} from '@angular/core';
import {catchError, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {MatTableDataSource} from "@angular/material/table";
import {Rented} from "../../../../shared/models/rented.model";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";
import {BouncyHouseService} from "../../../../data-access/services/bouncy-house.service";
import {map} from "rxjs/operators";
import {BouncyHouse} from "../../../../shared/models/bouncy-house.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../../bouncy-house/components/bouncy-house-form/bouncy-house-form.component";

@Component({
  selector: 'app-bouncy-house-detail',
  templateUrl: './bouncy-house-detail.component.html',
  styleUrls: ['./bouncy-house-detail.component.scss']
})
export class BouncyHouseDetailComponent implements OnInit {

  appState$!: Observable<AppState<CustomResponse>>
  readonly DataState = DataStateEnum

  bouncyHouseId: number

  bouncyHouse!: BouncyHouse

  constructor(private bouncyHouseService: BouncyHouseService, public dialogRef: MatDialogRef<BouncyHouseDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number) {
    this.bouncyHouseId = data
  }

  ngOnInit(): void {
    this.appState$ = this.bouncyHouseService.get$(this.bouncyHouseId)
      .pipe(
        map(response => {
          this.bouncyHouse = response.data.bouncy_house
          return { dataState: DataStateEnum.LOADED_STATE, appData: response }
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
  }

}
