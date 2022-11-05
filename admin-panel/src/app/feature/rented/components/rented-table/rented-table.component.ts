import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Rented} from "../../../../shared/models/rented.model";
import {Observable} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";


@Component({
  selector: 'app-rented-table',
  templateUrl: './rented-table.component.html',
  styleUrls: ['./rented-table.component.scss']
})
export class RentedTableComponent implements OnInit {


  @Input() dataSource = new MatTableDataSource<Rented>;
  displayedColumns: string[] = ['id', 'userId', 'bouncyHouseId', 'startDate', 'endDate']

  constructor() { }

  ngOnInit(): void {
  }

}
