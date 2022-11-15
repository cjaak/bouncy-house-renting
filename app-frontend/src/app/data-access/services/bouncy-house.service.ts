import { Injectable } from '@angular/core';
import { BouncyHouse } from '../../shared/models/bouncy-house.model';
import { BouncyHouseSizeEnum } from '../../shared/enums/size.enum';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CustomResponse } from '../../shared/interfaces/custom-response';
import { catchError, Observable, pipe, tap, throwError } from 'rxjs';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BouncyHouseThemeEnum } from '../../shared/enums/theme.enum';

@Injectable({
  providedIn: 'root',
})
export class BouncyHouseService {
  constructor(private http: HttpClient) {}

  private readonly apiUrl = 'http://localhost:8080';

  bouncyHouses$ = <Observable<CustomResponse>>(
    this.http
      .get<CustomResponse>(`${this.apiUrl}/bouncy-house`)
      .pipe(tap(console.log), catchError(this.handleError))
  );

  get$ = (id: number) =>
    <Observable<CustomResponse>>(
      this.http
        .get<CustomResponse>(`${this.apiUrl}/bouncy-house/${id}`)
        .pipe(tap(console.log), catchError(this.handleError))
    );

  save$ = (house: BouncyHouse) =>
    <Observable<CustomResponse>>(
      this.http
        .post<CustomResponse>(`${this.apiUrl}/bouncy-house/save`, house)
        .pipe(tap(console.log), catchError(this.handleError))
    );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(
      () => new Error(`An error occurred - Error code ${error.status}`)
    );
  }
}
