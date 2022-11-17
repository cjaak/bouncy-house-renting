import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { AppState } from '../../../../shared/interfaces/app-state';
import { CustomResponse } from '../../../../shared/interfaces/custom-response';
import { DataStateEnum } from '../../../../shared/enums/data-state.enum';
import { RatingService } from '../../../../data-access/services/rating.service';
import { AuthService } from '../../../../data-access/services/auth.service';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss'],
})
export class RatingListComponent implements OnInit {
  appState$!: Observable<AppState<CustomResponse>>;
  readonly DataState = DataStateEnum;

  constructor(
    private ratingService: RatingService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    let userId = this.auth.getSessionUserId();
    // gets all ratings by user
    this.appState$ = this.ratingService.ratingsByUser$(userId!).pipe(
      map((response) => {
        return { dataState: DataStateEnum.LOADED_STATE, appData: response };
      }),
      startWith({ dataState: DataStateEnum.LOADING_STATE }),
      catchError((error: string) => {
        return of({ dataState: DataStateEnum.ERROR_STATE, error: error });
      })
    );
  }
}
