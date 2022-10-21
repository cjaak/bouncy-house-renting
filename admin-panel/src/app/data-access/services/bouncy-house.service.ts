import {Injectable} from '@angular/core';
import {BouncyHouse} from "../../shared/models/bouncy-house.model";
import {BouncyHouseSizeEnum} from "../../shared/enums/size.enum";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CustomResponse} from "../../shared/interfaces/custom-response";
import {catchError, Observable, tap, throwError} from "rxjs";

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

  sorted$ = <Observable<CustomResponse>>this.http.get<CustomResponse>(`${this.apiUrl}/bouncy-house`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )



  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(() => new Error(`An error occurred - Error code ${error.status}`));
  }






}
