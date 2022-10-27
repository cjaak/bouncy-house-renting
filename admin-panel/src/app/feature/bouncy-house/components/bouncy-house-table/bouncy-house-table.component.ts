import {Component, OnInit, ViewChild} from '@angular/core';
import {BouncyHouseService} from "../../../../data-access/services/bouncy-house.service";
import {BouncyHouseFormComponent} from "../bouncy-house-form/bouncy-house-form.component";
import {MatDialog} from "@angular/material/dialog";
import {BouncyHouse} from "../../../../shared/models/bouncy-house.model";
import {BehaviorSubject, catchError, Observable, of, startWith} from "rxjs";
import {AppState} from "../../../../shared/interfaces/app-state";
import {CustomResponse} from "../../../../shared/interfaces/custom-response";
import {map} from "rxjs/operators";
import {DataStateEnum} from "../../../../shared/enums/data-state.enum";
import {SnackService} from "../../../../shared/services/snack.service";
import {MatSort, Sort} from "@angular/material/sort";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-bouncy-house-table',
  templateUrl: './bouncy-house-table.component.html',
  styleUrls: ['./bouncy-house-table.component.scss']
})
export class BouncyHouseTableComponent implements OnInit {
  appState$!: Observable<AppState<CustomResponse>>

  dataSource = new MatTableDataSource<BouncyHouse>;

  readonly DataState = DataStateEnum

  filterValue = "";

  // @ts-ignore
  private dataSubject = new BehaviorSubject<CustomResponse>(null)

  private _sort!: MatSort
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this._sort = ms;
    this.dataSource.sort = this._sort;
  }

  constructor(private bouncyHouseService: BouncyHouseService, private dialog: MatDialog, private snackService: SnackService) { }

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id',"imageUrl", 'name', 'pricePerDay', 'size', 'theme', 'weightLimit', "constructionTimeInMinutes", "withPowerConnection", 'delete'];

  ngOnInit(): void {
    this.appState$ = this.bouncyHouseService.bouncyHouses$
      .pipe(
        map(response => {
          this.dataSubject.next(response);
          this.dataSource = new MatTableDataSource(response.data.bouncy_houses)
          return { dataState: DataStateEnum.LOADED_STATE, appData: {...response, data: {bouncy_houses: response.data.bouncy_houses} }}
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  addItemDialog(){
    const dialogRef = this.dialog.open(BouncyHouseFormComponent, {
      data: {isEdit: false}
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.saveBouncyHouse(result as BouncyHouse)
      }
    })
  }

  editItemDialog(house: BouncyHouse){
    const dialogRef = this.dialog.open(BouncyHouseFormComponent, {
      data: {isEdit: true, house: house}
    })
  }

  handleDelete(element: BouncyHouse): void {
    this.appState$ = this.bouncyHouseService.delete$(element.id!)
      .pipe(
        map(response => {
          if(response.data.deleted) {
            let newItems = {...response, data:
                { bouncy_houses: this.dataSubject.value.data.bouncy_houses.filter((b: BouncyHouse) => b.id !== element.id)}}
            this.dataSubject.next(newItems)
            this.dataSource = new MatTableDataSource(newItems.data.bouncy_houses)
          }else{
            this.snackService.inUseError();
          }
          return { dataState: DataStateEnum.LOADED_STATE, appData: this.dataSubject.value}
        }),
        startWith({dataState: DataStateEnum.LOADING_STATE, appData: this.dataSubject.value}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
  }

  saveBouncyHouse(house: BouncyHouse): void {
    this.appState$ = this.bouncyHouseService.save$(house)
      .pipe(
        map(response => {
          let newItems = {...response, data: { bouncy_houses: [response.data.bouncy_house, ...this.dataSubject.value.data.bouncy_houses] }}
          this.dataSubject.next(newItems);
          this.dataSource = new MatTableDataSource(newItems.data.bouncy_houses);
          return { dataState: DataStateEnum.LOADED_STATE, appData: this.dataSubject.value}
        }),
        startWith({dataState: DataStateEnum.LOADED_STATE, appData: this.dataSubject.value}),
        catchError((error: string) => {
          return of({dataState: DataStateEnum.ERROR_STATE, error: error})
        })
      )
  }

  sortData(sort: Sort) {
    this.appState$ = this.bouncyHouseService.sorted$(sort, this.dataSubject.value).pipe(
      map(response => {
        this.dataSubject.next(response);
        this.dataSource = new MatTableDataSource(response.data.bouncy_houses)
        this.applyAllFilters();
        return {dataState: DataStateEnum.LOADED_STATE, appData: response}
      }),
      startWith({dataState: DataStateEnum.LOADED_STATE, appData: this.dataSubject.value}),
      catchError((error: string) => {
        return of({dataState: DataStateEnum.ERROR_STATE, error: error})
      })
    )
    console.log(this.appState$);
   }

  applySearchFilter(event: KeyboardEvent) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.applyAllFilters();
  }

  private applyAllFilters(){
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
}
