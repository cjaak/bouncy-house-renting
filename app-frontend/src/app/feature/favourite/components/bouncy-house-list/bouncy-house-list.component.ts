import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { BouncyHouseService } from '../../../../data-access/services/bouncy-house.service';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { AppState } from '../../../../shared/interfaces/app-state';
import { CustomResponse } from '../../../../shared/interfaces/custom-response';
import { DataStateEnum } from '../../../../shared/enums/data-state.enum';
import { AuthService } from '../../../../data-access/services/auth.service';

@Component({
  selector: 'app-bouncy-house-list',
  templateUrl: './bouncy-house-list.component.html',
  styleUrls: ['./bouncy-house-list.component.scss'],
})
export class BouncyHouseListComponent implements OnInit {
  appState$!: Observable<AppState<CustomResponse>>;
  readonly DataState = DataStateEnum;

  constructor(
    private bouncyHouseService: BouncyHouseService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    // loads all favourite bouncy houses
    let userId = this.auth.getSessionUserId();
    this.appState$ = this.bouncyHouseService
      .bouncyHousesFavourite$(userId)
      .pipe(
        map((response) => {
          return {
            dataState: DataStateEnum.LOADED_STATE,
            appData: {
              ...response,
              data: { bouncy_houses: response.data.bouncy_houses },
            },
          };
        }),
        startWith({ dataState: DataStateEnum.LOADING_STATE }),
        catchError((error: string) => {
          return of({ dataState: DataStateEnum.ERROR_STATE, error: error });
        })
      );
  }
}
