import { Component, Inject, OnInit } from '@angular/core';
import { Rating } from '../../../../shared/models/rating.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss'],
})
export class RatingListComponent implements OnInit {
  ratings: Rating[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Rating[]) {
    this.ratings = data;
  }

  ngOnInit(): void {}
}
