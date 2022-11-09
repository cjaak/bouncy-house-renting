import {Component, Input, OnInit} from '@angular/core';
import {Rented} from "../../../../shared/models/rented.model";
import {BouncyHouseService} from "../../../../data-access/services/bouncy-house.service";
import {catchError, map, Observable, of, startWith, tap} from "rxjs";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";
import {BouncyHouse} from "../../../../shared/models/bouncy-house.model";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {FormControl, FormGroup} from "@angular/forms";
import {RentedService} from "../../../../data-access/services/rented.service";
import {AuthService} from "../../../../data-access/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-renting-form',
  templateUrl: './renting-form.component.html',
  styleUrls: ['./renting-form.component.scss']
})
export class RentingFormComponent implements OnInit {

  @Input() rentedList!: Rented[]
  @Input() bouncyHouseId!: number

  bouncyHouse!: BouncyHouse

  listOfDates: Date[][] = []

  minDate: Date

  days: number = 1



  appState$!: Observable<AppState<CustomResponse>>
  readonly DataState = DataStateEnum

  constructor(private bouncyHouseService: BouncyHouseService, private rentedService: RentedService, private auth: AuthService, private router: Router) {
    this.minDate = new Date()
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  // rangeFilter(date: Date): boolean {
  //   if (date! < this.minDate) return false;
  //     for (let i = 0; i < this.listOfDates.length; i++) {
  //       if (date! >= this.listOfDates[i][0] && date! <= this.listOfDates[i][1])
  //         return false;
  //     }
  //     return true;
  // }

  rangeFilterRecursive(date: Date, index: number): boolean {
    let check = !(date >= this.rentedList[index].startDate! && date <= this.rentedList[index].startDate!)
    return false
    // if(index === this.rentedList.length -1){
    //   return check
    // }
    // return check && this.rangeFilterRecursive(date, index+1)
  }

  ngOnInit(): void {

     this.appState$ = this.bouncyHouseService.get$(this.bouncyHouseId)
      .pipe(
        map(response => {
          this.bouncyHouse = response.data.bouncy_house
          return { dataState: DataStateEnum.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )

    this.rentedList.forEach((element: any) => {
      const el=[
          new Date(element.startDate),
          new Date(element.endDate),
        ]
        el[0].setHours(0,0,0,0)
        el[1].setHours(0, 0, 0, 0)
        this.listOfDates.push(el);
      });

     this.range.valueChanges.subscribe((value) =>{
       if(this.dateRangeIsSet()){
        let diff = (value.end!.valueOf() - value.start!.valueOf())
        this.days = Math.ceil(diff / (1000 * 3600 * 24)) + 1;
       }
     })

  }

  dateRangeIsSet(): boolean{
    return !!(this.range.value.start && this.range.value.end);
  }


  checkout() {
    if(this.dateRangeIsSet()){
      let userId = this.auth.getSessionUserId()
      let rented = new Rented(undefined, userId!, this.bouncyHouseId, this.range.value.start, this.range.value.end)
      console.log(rented)
      this.appState$ = this.rentedService.save$(rented).pipe(
        tap(console.log),
        map(response => {
          this.router.navigate(["/profile"])
          return { dataState: DataStateEnum.LOADED_STATE, appData: response}
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )


    }
  }
}


