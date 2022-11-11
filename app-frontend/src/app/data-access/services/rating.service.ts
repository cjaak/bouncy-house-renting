import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {CustomResponse} from "../../shared/interfaces/custom-response";
import {Rented} from "../../shared/models/rented.model";
import {Rating} from "../../shared/models/rating.model";

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl = "http://localhost:8080"

  RatingsByUser$ = (userId: number) => <Observable<CustomResponse>>this.http.get<CustomResponse>(`${this.apiUrl}/rating/user/${userId}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  RatingsByBouncyHouse$ = (bouncyHouseId: number) =><Observable<CustomResponse>>this.http.get<CustomResponse>(`${this.apiUrl}/rating/bouncy-house/${bouncyHouseId}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  RatingByRented$ = (rentedId: number) =><Observable<CustomResponse>>this.http.get<CustomResponse>(`${this.apiUrl}/rating/rented/${rentedId}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  save$ = (rating: Rating) => <Observable<CustomResponse>>
  this.http.post<CustomResponse>(`${this.apiUrl}/rating/save`, rating).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(() => new Error(`An error occurred - Error code ${error.status}`));
  }
}
