import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CustomResponse } from '../../shared/interfaces/custom-response';
import { Rented } from '../../shared/models/rented.model';

@Injectable({
  providedIn: 'root',
})
export class RentedService {
  constructor(private http: HttpClient) {}

  private readonly apiUrl = 'http://localhost:8080';

  rentedByUser$ = (userId: number) =>
    <Observable<CustomResponse>>(
      this.http
        .get<CustomResponse>(`${this.apiUrl}/rented/user/${userId}`)
        .pipe(tap(console.log), catchError(this.handleError))
    );

  rentedByBouncyHouse$ = (bouncyHouseId: number) =>
    <Observable<CustomResponse>>(
      this.http
        .get<CustomResponse>(
          `${this.apiUrl}/rented/bouncy-house/${bouncyHouseId}`
        )
        .pipe(tap(console.log), catchError(this.handleError))
    );

  save$ = (rented: Rented) =>
    <Observable<CustomResponse>>(
      this.http
        .post<CustomResponse>(`${this.apiUrl}/rented/save`, rented)
        .pipe(tap(console.log), catchError(this.handleError))
    );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(
      () => new Error(`An error occurred - Error code ${error.status}`)
    );
  }
}
