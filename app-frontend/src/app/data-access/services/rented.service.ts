import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {CustomResponse} from "../../shared/interfaces/custom-response";

@Injectable({
  providedIn: 'root'
})
export class RentedService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl = "http://localhost:8080"

   RentedByUser$ = (userId: number) =><Observable<CustomResponse>>this.http.get<CustomResponse>(`${this.apiUrl}/rented/user/${userId}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  RentedByBouncyHouse$ = (bouncyHouseId: number) =><Observable<CustomResponse>>this.http.get<CustomResponse>(`${this.apiUrl}/rented/bouncy-house/${bouncyHouseId}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(() => new Error(`An error occurred - Error code ${error.status}`));
  }
}
