import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Rented} from "../../../../shared/models/rented.model";
import {Observable} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {BouncyHouseDetailComponent} from "../bouncy-house-detail/bouncy-house-detail.component";
import {UserDetailComponent} from "../user-detail/user-detail.component";


@Component({
  selector: 'app-rented-table',
  templateUrl: './rented-table.component.html',
  styleUrls: ['./rented-table.component.scss']
})
export class RentedTableComponent implements OnInit {


  @Input() dataSource = new MatTableDataSource<Rented>;
  displayedColumns: string[] = ['id', 'userId', 'bouncyHouseId', 'startDate', 'endDate']

  private _sort!: MatSort
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this._sort = ms;
    this.dataSource.sort = this._sort;
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showBouncyHouseDetail(id: number) {
    const dialogRef = this.dialog.open(BouncyHouseDetailComponent, {
      data: id
    })
  }

  showUserDetail(userId: number) {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      data: userId
    })
  }
}
