import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-with-text',
  templateUrl: './icon-with-text.component.html',
  styleUrls: ['./icon-with-text.component.scss'],
})
export class IconWithTextComponent implements OnInit {
  @Input() icon!: string;
  @Input() spanText!: string;

  constructor() {}

  ngOnInit(): void {}
}
