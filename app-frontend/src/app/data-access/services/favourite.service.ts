import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CustomResponse } from '../../shared/interfaces/custom-response';
import { Favourite } from '../../shared/models/favourite.model';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  constructor(private http: HttpClient) {}

  private readonly apiUrl = 'http://localhost:8080';

  /**
   * Returns whether the current user has added the specified bouncy house to their favourites
   * and stores the result in and observable
   * @param bouncyHouseId
   * @param userId
   */
  getByBouncyHouseAndUser$ = (bouncyHouseId: number, userId: number) =>
    <Observable<CustomResponse>>(
      this.http
        .get<CustomResponse>(
          `${this.apiUrl}/favourite/bouncyHouse/${bouncyHouseId}/user/${userId}`
        )
        .pipe(tap(console.log), catchError(this.handleError))
    );

  save$ = (favourite: Favourite) =>
    <Observable<CustomResponse>>(
      this.http
        .post<CustomResponse>(`${this.apiUrl}/favourite/save`, favourite)
        .pipe(tap(console.log), catchError(this.handleError))
    );

  delete$ = (id: number) =>
    <Observable<CustomResponse>>(
      this.http
        .delete<CustomResponse>(`${this.apiUrl}/favourite/${id}`)
        .pipe(tap(console.log), catchError(this.handleError))
    );

  /**
   * Returns a custom error code
   * @param error
   * @private
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(
      () => new Error(`An error occurred - Error code ${error.status}`)
    );
  }
}
