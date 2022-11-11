import { Component, OnInit } from '@angular/core';
import {BouncyHouse} from "../../../../shared/models/bouncy-house.model";
import {Rented} from "../../../../shared/models/rented.model";
import {DateRange} from "@angular/material/datepicker";
import {AuthService} from "../../../../data-access/services/auth.service";
import {Rating} from "../../../../shared/models/rating.model";

@Component({
  selector: 'app-renting-detail',
  templateUrl: './renting-detail.component.html',
  styleUrls: ['./renting-detail.component.scss']
})
export class RentingDetailComponent implements OnInit {

  bouncyHouse!: BouncyHouse
  rented!: Rented

  dateRange!: DateRange<Date> | null

  days!: number

  daysTillStart!: number

  today = new Date()

  stars = 0

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.days = this.calcDays(this.rented.endDate, this.rented.startDate)
    this.daysTillStart = this.calcDays(this.rented.startDate, this.today);
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
      comment: ""
    }
  }
}
