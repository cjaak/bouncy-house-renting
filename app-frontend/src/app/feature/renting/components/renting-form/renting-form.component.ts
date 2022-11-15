import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rented } from '../../../../shared/models/rented.model';
import { BouncyHouseService } from '../../../../data-access/services/bouncy-house.service';
import { catchError, map, Observable, of, startWith, tap } from 'rxjs';
import { DataStateEnum } from '../../../../shared/enums/data-state.enum';
import { BouncyHouse } from '../../../../shared/models/bouncy-house.model';
import { AppState } from '../../../../shared/interfaces/app-state';
import { CustomResponse } from '../../../../shared/interfaces/custom-response';
import { FormControl, FormGroup } from '@angular/forms';
import { RentedService } from '../../../../data-access/services/rented.service';
import { AuthService } from '../../../../data-access/services/auth.service';
import { Router } from '@angular/router';
import { DateRange } from '@angular/material/datepicker';
import { Location } from '@angular/common';
import { SnackService } from '../../../../shared/services/snack.service';

@Component({
  selector: 'app-renting-form',
  templateUrl: './renting-form.component.html',
  styleUrls: ['./renting-form.component.scss'],
})
export class RentingFormComponent implements OnInit {
  @Input() rentedList!: Rented[];
  @Input() bouncyHouseId!: number;

  bouncyHouse!: BouncyHouse;

  listOfDates: Date[][] = [];

  minDate: Date;

  days: number = 0;

  appState$!: Observable<AppState<CustomResponse>>;
  readonly DataState = DataStateEnum;

  constructor(
    private bouncyHouseService: BouncyHouseService,
    private rentedService: RentedService,
    private auth: AuthService,
    private router: Router,
    private location: Location,
    private snackService: SnackService
  ) {
    this.minDate = new Date();
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  @Input() selectedRangeValue!: DateRange<Date> | null;
  @Output() selectedRangeValueChange = new EventEmitter<DateRange<Date>>();

  selectedChange(m: any) {
    if (!this.selectedRangeValue?.start || this.selectedRangeValue?.end) {
      this.selectedRangeValue = new DateRange<Date>(m, null);
    } else {
      const start = this.selectedRangeValue.start;
      const end = m;
      for (let i = 0; i < this.listOfDates.length; i++) {
        if (
          (start < this.listOfDates[i][0] && end > this.listOfDates[i][1]) ||
          (end < this.listOfDates[i][0] && start > this.listOfDates[i][1])
        ) {
          this.selectedRangeValue = new DateRange<Date>(m, null);
          return;
        }
      }
      if (end < start) {
        this.selectedRangeValue = new DateRange<Date>(end, start);
      } else {
        this.selectedRangeValue = new DateRange<Date>(start, end);
      }
    }

    if (this.dateRangeIsSet()) {
      let diff =
        this.selectedRangeValue.end!.valueOf() -
        this.selectedRangeValue.start!.valueOf();
      this.days = Math.ceil(diff / (1000 * 3600 * 24)) + 1;
    }
    this.selectedRangeValueChange.emit(this.selectedRangeValue);
  }

  myFilter = (d: Date): boolean => {
    if (d < this.minDate) return false;
    for (let i = 0; i < this.listOfDates.length; i++) {
      //let end = new Date(this.listOfDates[i][1].getTime() + (900 * 60 * 60 * 24));
      if (d >= this.listOfDates[i][0] && d <= this.listOfDates[i][1])
        return false;
    }
    return true;
  };

  ngOnInit(): void {
    this.appState$ = this.bouncyHouseService.get$(this.bouncyHouseId).pipe(
      map((response) => {
        this.bouncyHouse = response.data.bouncy_house;
        return { dataState: DataStateEnum.LOADED_STATE, appData: response };
      }),
      startWith({ dataState: DataStateEnum.LOADING_STATE }),
      catchError((error: string) => {
        return of({ dataState: DataStateEnum.ERROR_STATE, error: error });
      })
    );

    this.rentedList.forEach((element: any) => {
      const el = [new Date(element.startDate), new Date(element.endDate)];
      el[0].setHours(0, 0, 0, 0);
      el[1].setHours(0, 0, 0, 0);
      this.listOfDates.push(el);
    });

    this.range.valueChanges.subscribe((value) => {
      if (this.dateRangeIsSet()) {
        let diff = value.end!.valueOf() - value.start!.valueOf();
        this.days = Math.ceil(diff / (1000 * 3600 * 24)) + 1;
      }
    });
  }

  dateRangeIsSet(): boolean {
    return !!(this.selectedRangeValue?.start && this.selectedRangeValue.end);
  }

  checkout() {
    if (this.dateRangeIsSet()) {
      let userId = this.auth.getSessionUserId();
      let end = new Date(
        this.selectedRangeValue!.end!.getTime() + 1000 * 60 * 60 * 24
      );
      let start = new Date(
        this.selectedRangeValue!.start!.getTime() + 1000 * 60 * 60 * 24
      );
      let rented = new Rented(
        undefined,
        userId!,
        this.bouncyHouseId,
        start,
        end
      );
      this.appState$ = this.rentedService.save$(rented).pipe(
        tap(console.log),
        map((response) => {
          this.router.navigate(['/profile']);
          this.snackService.rentedSuccessfully();
          return { dataState: DataStateEnum.LOADED_STATE, appData: response };
        }),
        startWith({ dataState: DataStateEnum.LOADING_STATE }),
        catchError((error: string) => {
          return of({ dataState: DataStateEnum.ERROR_STATE, error: error });
        })
      );
    }
  }

  back() {
    this.location.back();
  }
}
