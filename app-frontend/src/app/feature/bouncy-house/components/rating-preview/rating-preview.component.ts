import {Component, Input, OnInit} from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";
import {RatingService} from "../../../../data-access/services/rating.service";
import {Rating} from "../../../../shared/models/rating.model";
import {MatDialog} from "@angular/material/dialog";
import {RatingListComponent} from "../rating-list/rating-list.component";

@Component({
  selector: 'app-rating-preview',
  templateUrl: './rating-preview.component.html',
  styleUrls: ['./rating-preview.component.scss']
})
export class RatingPreviewComponent implements OnInit {

  appState$!: Observable<AppState<CustomResponse>>
  readonly DataState = DataStateEnum

  @Input() bouncyHouseId!: number

  ratings!: Rating[]

  constructor(private ratingService: RatingService, private dialog: MatDialog) { }

  ngOnInit(): void {
     this.appState$ = this.ratingService.RatingsByBouncyHouse$(this.bouncyHouseId)
      .pipe(
        map(response => {
          this.ratings = response.data.ratings
          return { dataState: DataStateEnum.LOADED_STATE, appData:  response}
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
  }

  calcAvgRating(){
    return this.ratings.reduce((total, next)=> total + next.stars, 0) / this.ratings.length
  }

  openRatingsDialog() {
    const dialogRef = this.dialog.open(RatingListComponent, {data: this.ratings, width: "100%", height: "100%"})

  }
}
