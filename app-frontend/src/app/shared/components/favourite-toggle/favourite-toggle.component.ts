import { Component, Input, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { AppState } from '../../interfaces/app-state';
import { CustomResponse } from '../../interfaces/custom-response';
import { DataStateEnum } from '../../enums/data-state.enum';
import { FavouriteService } from '../../../data-access/services/favourite.service';
import { AuthService } from '../../../data-access/services/auth.service';
import { Favourite } from '../../models/favourite.model';

@Component({
  selector: 'app-favourite-toggle',
  templateUrl: './favourite-toggle.component.html',
  styleUrls: ['./favourite-toggle.component.scss'],
})
export class FavouriteToggleComponent implements OnInit {
  appState$!: Observable<AppState<CustomResponse>>;
  readonly DataState = DataStateEnum;

  @Input() bouncyHouseId!: number;

  icons = ['favorite_outline', 'favorite'];
  icon!: string;
  favourite: Favourite | null = null;
  userId!: number;

  constructor(
    private favouriteService: FavouriteService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.auth.getSessionUserId();
    this.appState$ = this.favouriteService
      .getByBouncyHouseAndUser$(this.bouncyHouseId, this.userId)
      .pipe(
        map((response) => {
          this.setIcon(response.data.favourite);
          return { dataState: DataStateEnum.LOADED_STATE, appData: response };
        }),
        startWith({ dataState: DataStateEnum.LOADING_STATE }),
        catchError((error: string) => {
          return of({ dataState: DataStateEnum.ERROR_STATE, error: error });
        })
      );
  }

  toggleFavourite() {
    let index = this.icons.indexOf(this.icon);
    if (index === 0) {
      this.appState$ = this.favouriteService
        .save$({
          id: undefined,
          bouncyHouseId: this.bouncyHouseId!,
          userId: this.userId!,
        })
        .pipe(
          map((response) => {
            this.favourite = response.data.favourite;
            this.setIcon(true);
            return { dataState: DataStateEnum.LOADED_STATE, appData: response };
          }),
          startWith({ dataState: DataStateEnum.LOADING_STATE }),
          catchError((error: string) => {
            return of({ dataState: DataStateEnum.ERROR_STATE, error: error });
          })
        );
    } else if (index === 1) {
      this.appState$ = this.favouriteService.delete$(this.favourite!.id!).pipe(
        map((response) => {
          this.favourite = null;
          this.setIcon(false);
          return { dataState: DataStateEnum.LOADED_STATE, appData: response };
        }),
        startWith({ dataState: DataStateEnum.LOADING_STATE }),
        catchError((error: string) => {
          return of({ dataState: DataStateEnum.ERROR_STATE, error: error });
        })
      );
    }
  }

  setIcon(favourite: boolean) {
    favourite ? (this.icon = this.icons[1]) : (this.icon = this.icons[0]);
  }
}
