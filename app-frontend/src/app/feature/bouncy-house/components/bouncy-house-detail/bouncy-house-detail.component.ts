import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BouncyHouse } from '../../../../shared/models/bouncy-house.model';

@Component({
  selector: 'app-bouncy-house-detail',
  templateUrl: './bouncy-house-detail.component.html',
  styleUrls: ['./bouncy-house-detail.component.scss'],
})
export class BouncyHouseDetailComponent implements OnInit {
  @Input() bouncyHouse!: BouncyHouse;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  /**
   * Returns the user to the last route they visited
   */
  back() {
    this.location.back();
  }
}
