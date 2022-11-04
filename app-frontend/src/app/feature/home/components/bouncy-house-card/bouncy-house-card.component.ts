import {Component, Input, OnInit} from '@angular/core';
import {BouncyHouse} from "../../../../shared/models/bouncy-house.model";

@Component({
  selector: 'app-bouncy-house-card',
  templateUrl: './bouncy-house-card.component.html',
  styleUrls: ['./bouncy-house-card.component.scss']
})
export class BouncyHouseCardComponent implements OnInit {

  constructor() { }

  @Input() current!: BouncyHouse

  ngOnInit(): void {
  }

}
