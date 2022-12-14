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
import { FilterService } from '../../services/filter.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-bouncy-house-list',
  templateUrl: './bouncy-house-list.component.html',
  styleUrls: ['./bouncy-house-list.component.scss'],
})
export class BouncyHouseListComponent implements OnInit {
  appState$!: Observable<AppState<CustomResponse>>;
  readonly DataState = DataStateEnum;

  searchFilterValue = '';
  sortValue: Sort = { active: '', direction: '' };
  filterValue: Map<string, any> = new Map<string, any>();

  constructor(
    private bouncyHouseService: BouncyHouseService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    // loads all bouncy houses
    this.appState$ = this.bouncyHouseService.bouncyHouses$.pipe(
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

    /**
     * subscribes to the search filter value
     */
    this.filterService.searchFilterSubject.subscribe(
      (value) => (this.searchFilterValue = value)
    );
    /**
     * subscribes to the sort value
     */
    this.filterService.SortSubject.subscribe(
      (value) => (this.sortValue = value)
    );
    /**
     * subscribes to the filter value
     */
    this.filterService.filterSubject.subscribe((value) => {
      this.filterValue = value;
    });
  }
}
