import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-bar',
  templateUrl: './profile-bar.component.html',
  styleUrls: ['./profile-bar.component.scss'],
})
export class ProfileBarComponent implements OnInit {
  @Input() name!: string;

  constructor() {}

  ngOnInit(): void {}
}
