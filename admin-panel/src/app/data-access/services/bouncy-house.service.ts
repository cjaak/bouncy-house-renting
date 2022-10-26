import {Injectable} from '@angular/core';
import {BouncyHouse} from "../../shared/models/bouncy-house.model";
import {BouncyHouseSizeEnum} from "../../shared/enums/size.enum";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CustomResponse} from "../../shared/interfaces/custom-response";
import {catchError, Observable, pipe, tap, throwError} from "rxjs";
import {Sort} from "@angular/material/sort";

@Injectable({
  providedIn: 'root'
})
export class BouncyHouseService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl = "http://localhost:8080"

  bouncyHouses$ = <Observable<CustomResponse>>this.http.get<CustomResponse>(`${this.apiUrl}/bouncy-house`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  save$ = (house: BouncyHouse) => <Observable<CustomResponse>>
  this.http.post<CustomResponse>(`${this.apiUrl}/bouncy-house/save`, house).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  update$ = (house: BouncyHouse) => <Observable<CustomResponse>>
  this.http.put<CustomResponse>(`${this.apiUrl}/bouncy-house/${house.id}`, house).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  delete$ = (id: number) => <Observable<CustomResponse>>
  this.http.delete<CustomResponse>(`${this.apiUrl}/bouncy-house/${id}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  sorted$ = (sort: Sort, response: CustomResponse) => <Observable<CustomResponse>>
    new Observable<CustomResponse>(
      subscriber => {
        console.log(response);
        let sortedData: BouncyHouse[];
        if(!sort.active || sort.direction === '') {
          sortedData = response.data.bouncy_houses;
        }else{
          sortedData = response.data.bouncy_houses.sort((a: BouncyHouse, b: BouncyHouse) => {
          const isAsc = sort.direction === 'asc';
          switch (sort.active){
            case 'name':
              return this.compare(a.name!, b.name!, isAsc);
            case 'price':
              return this.compare(a.pricePerDay!, b.pricePerDay!, isAsc);
            case 'size':
              return this.compare(a.size!, b.size!, isAsc);
            default:
              return 0;
            }
          });
        }
        subscriber.next({...response, message: `bouncy houses sorted by ${sort.active}`, data: {bouncy_houses: sortedData}});
        subscriber.complete();
      }
    ).pipe(
      tap(console.log),
      catchError(this.handleError)
    );

  private  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(() => new Error(`An error occurred - Error code ${error.status}`));
  }






}
