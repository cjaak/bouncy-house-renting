import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {CustomResponse} from "../../shared/interfaces/custom-response";

@Injectable({
  providedIn: 'root'
})
export class RentedService {

  private readonly apiUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  /**
   * Fetches all rented data for currently rented bouncy houses and stores in an observable
   */
  rentedActive$ = <Observable<CustomResponse>>this.http.get<CustomResponse>(`${this.apiUrl}/rented/in-use`).pipe(
    tap(console.log),
    catchError(this.handleError)
   )

  /**
   * Fetches all new rented data and stores in an observable
   */
  rentedNew$ = <Observable<CustomResponse>>this.http.get<CustomResponse>(`${this.apiUrl}/rented/new`).pipe(
    tap(console.log),
    catchError(this.handleError)
   )

  /**
   * Fetches all rented data and stores in an observable
   */
  rented$ = <Observable<CustomResponse>>this.http.get<CustomResponse>(`${this.apiUrl}/rented`).pipe(
    tap(console.log),
    catchError(this.handleError)
   )

  /**
   * Fetches all rented data by bouncy house and stores in an observable
   */
  rentedByBounceHouse$ = (bouncyHouseId: number) => <Observable<CustomResponse>>this.http.get<CustomResponse>(`${this.apiUrl}/rented/bouncy-house/${bouncyHouseId}`).pipe(
    tap(console.log),
    catchError(this.handleError)
   )


  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(() => new Error(`An error occurred - Error code ${error.status}`));
  }
}
