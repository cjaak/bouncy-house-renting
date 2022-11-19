import { Injectable } from '@angular/core';
import {User} from "../../shared/models/user.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {CustomResponse} from "../../shared/interfaces/custom-response";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl = "http://localhost:8080"

  users$ = <Observable<CustomResponse>>this.http.get<CustomResponse>(`${this.apiUrl}/user`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  get$ = (userId: number) => <Observable<CustomResponse>>this.http.get<CustomResponse>(`${this.apiUrl}/user/${userId}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )


  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(() => new Error(`An error occurred - Error code ${error.status}`));
  }


}
