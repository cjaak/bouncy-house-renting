import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rented-table',
  templateUrl: './rented-table.component.html',
  styleUrls: ['./rented-table.component.scss']
})
export class RentedTableComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['id', 'userId', 'bouncyHouseId', 'startDate', 'endDate']

  constructor() { }

  ngOnInit(): void {
  }

}
