import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  inUseError() {
    this.snackBar.open('Diese Hüpfburg wird noch vermietet und kann daher nicht gelöscht werden.', "OK", {
      duration: 5000
    });

    return this.snackBar._openedSnackBarRef
      ?.onAction()
      .pipe(tap(_ => this.router.navigate(["/bouncy-house"])))
      .subscribe()
  }

  invalidDataError(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 5000
    });

    return this.snackBar._openedSnackBarRef
      ?.onAction()
      .pipe(tap(_ => this.router.navigate([""])))
      .subscribe()
  }
}
