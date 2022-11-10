import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../data-access/services/auth.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";
import {UserService} from "../../../../data-access/services/user.service";
import {User} from "../../../../shared/models/user.model";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RatingListComponent} from "../../components/rating-list/rating-list.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {

  constructor(private auth: AuthService, private userService: UserService, private route: Router, private dialog: MatDialog) { }

  appState$!: Observable<AppState<CustomResponse>>
  readonly DataState = DataStateEnum
  user!: User

  ngOnInit(): void {
      let userId = Number(this.auth.getSessionUserId())
      this.appState$ = this.userService.get$(userId)
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

  logout() {
    this.route.navigate(['../auth/login']);
    this.auth.deleteSessionUserId()
  }

  openMyRatings() {
    const dialogRef = this.dialog.open(RatingListComponent, {width: "100%", height: "100%"})
  }
}
