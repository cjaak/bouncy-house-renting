import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BouncyHouse } from '../../models/bouncy-house.model';

@Component({
  selector: 'app-bouncy-house-card',
  templateUrl: './bouncy-house-card.component.html',
  styleUrls: ['./bouncy-house-card.component.scss'],
})

/**
 * Bouncy house display component
 */
export class BouncyHouseCardComponent implements OnInit {
  constructor() {}

  @Input() current!: BouncyHouse;
  @Output() removedFavourite = new EventEmitter();

  ngOnInit(): void {}

  handleRemove() {
    this.removedFavourite.emit();
  }
}
