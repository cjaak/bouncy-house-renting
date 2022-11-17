import {Component, Inject, OnInit} from '@angular/core';
import {catchError, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";
import {User} from "../../../../shared/models/user.model";
import {UserService} from "../../../../data-access/services/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  appState$!: Observable<AppState<CustomResponse>>
  readonly DataState = DataStateEnum

  userId: number

  user!: User

  constructor(private userService: UserService, public dialogRef: MatDialogRef<UserDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number) {
    this.userId = data
  }

  ngOnInit(): void {
    this.appState$ = this.userService.get$(this.userId)
      .pipe(
        map(response => {
          this.user = response.data.user
          return { dataState: DataStateEnum.LOADED_STATE, appData: response }
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
  }

}
