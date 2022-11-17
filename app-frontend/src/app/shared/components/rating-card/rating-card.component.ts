import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../../models/rating.model';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.scss'],
})
export class RatingCardComponent implements OnInit {
  @Input() rating!: Rating;

  constructor() {}

  ngOnInit(): void {}
}
