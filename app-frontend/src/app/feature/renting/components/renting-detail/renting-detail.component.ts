import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BouncyHouse} from "../../../../shared/models/bouncy-house.model";
import {Rented} from "../../../../shared/models/rented.model";
import {DateRange} from "@angular/material/datepicker";
import {AuthService} from "../../../../data-access/services/auth.service";
import {Rating} from "../../../../shared/models/rating.model";
import {CachingService} from "../../services/caching.service";
import {catchError, map, Observable, of, startWith, subscribeOn} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";
import {RatingService} from "../../../../data-access/services/rating.service";
import {Location} from "@angular/common";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-renting-detail',
  templateUrl: './renting-detail.component.html',
  styleUrls: ['./renting-detail.component.scss']
})
export class RentingDetailComponent implements OnInit {

  appState$!: Observable<AppState<CustomResponse>>
  readonly DataState = DataStateEnum

  bouncyHouse!: BouncyHouse
  rented!: Rented


  @Input() selectedRangeValue: DateRange<Date> | undefined


  comment = new FormControl("");

  days: number =0

  daysTillStart!: number

  today!: Date
  start!: Date
  end!: Date

  stars = 0

  constructor(private auth: AuthService, private caching: CachingService, private ratingService: RatingService, private location: Location) { }

  ngOnInit(): void {
    this.today = new Date()

    this.caching.bouncyHouseSubject.subscribe((value)=> this.bouncyHouse = value)

    this.caching.rentedSubject.subscribe((value)=> {
      this.rented = value
      this.start = new Date(String(value.startDate))
      this.end = new Date(String(value.endDate))
      this.selectedRangeValue = new DateRange(new Date(this.start), new Date(this.end))
      this.days = this.calcDays(this.end, this.start)
      this.daysTillStart = this.calcDays(this.start, this.today);
    })

    this.appState$ = this.ratingService.RatingByRented$(this.rented!.id!)
      .pipe(
        map(response => {
          return {dataState: DataStateEnum.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
  }

  private calcDays(a: Date, b: Date) :number{
    let diff = a.valueOf() - b.valueOf()
    return Math.ceil(diff / (1000 * 3600 * 24)) + 1;
  }

  isStarsSet(){
    return this.stars > 0
  }

  save() {
    if(!this.isStarsSet()){
      return
    }
    let userId = this.auth.getSessionUserId()
    let rating: Rating = {
      id: undefined,
      rentedId: this.rented.id!,
      userId: userId,
      bouncyHouseId: this.bouncyHouse.id!,
      stars: this.stars,
      comment: this.comment.value?? ""
    }
    console.log(rating)
    this.appState$ = this.ratingService.save$(rating)
    .pipe(
      map(response => {
        this.rented.rated = true
        return { dataState: DataStateEnum.LOADED_STATE, appData: response}
      }),
      startWith({dataState: DataStateEnum.LOADING_STATE}),
      catchError((error: string) => {
        return of({dataState: DataStateEnum.ERROR_STATE, error: error})
      }),
    )
  }

  back() {
      this.location.back()
  }
}
