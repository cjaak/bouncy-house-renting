import { Component, OnInit } from '@angular/core';
import {User} from "../../../../shared/models/user.model";
import {BouncyHouseFormComponent} from "../../../bouncy-house/components/bouncy-house-form/bouncy-house-form.component";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../../../data-access/services/user.service";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {catchError, Observable, of, startWith} from "rxjs";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  appState$!: Observable<AppState<CustomResponse>>

  readonly DataState = DataStateEnum

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'street', "houseNumber", "zipCode", "city"];

  constructor(private dialog: MatDialog, private userService: UserService) {}

  ngOnInit(): void {
    this.appState$ = this.userService.users$
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

  addItemDialog() {
    const dialogRef = this.dialog.open(BouncyHouseFormComponent, {
      data: {isEdit: false}
    })
  }

  handleDelete(element: User){

  }
}
