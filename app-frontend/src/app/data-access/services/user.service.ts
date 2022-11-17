import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { CustomResponse } from '../../shared/interfaces/custom-response';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  private readonly apiUrl = 'http://localhost:8080';

  users$ = <Observable<CustomResponse>>(
    this.http
      .get<CustomResponse>(`${this.apiUrl}/user`)
      .pipe(tap(console.log), catchError(this.handleError))
  );

  get$ = (id: number) =>
    <Observable<CustomResponse>>(
      this.http
        .get<CustomResponse>(`${this.apiUrl}/user/${id}`)
        .pipe(tap(console.log), catchError(this.handleError))
    );

  login(email: string, password: string): Observable<boolean> {
    let body = { email: email, password: password };
    return this.http
      .post<CustomResponse>(`${this.apiUrl}/user/login`, body)
      .pipe(
        tap(console.log),
        map((response: CustomResponse) => {
          let userId = response.data.userId;
          console.log(userId);
          if (userId) {
            this.auth.setSessionUserId(userId);
            return true;
          }
          return false;
        }),
        catchError(this.handleError)
      );
  }

  register(user: User): Observable<boolean> {
    return this.http
      .post<CustomResponse>(`${this.apiUrl}/user/save`, user)
      .pipe(
        tap(console.log),
        map((response: CustomResponse) => {
          let user = response.data.user;
          if (user) {
            this.auth.setSessionUserId(user.id);
            return true;
          }
          return false;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(
      () => new Error(`An error occurred - Error code ${error.status}`)
    );
  }
}
