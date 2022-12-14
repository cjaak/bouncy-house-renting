import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  authError(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 5000,
    });

    return this.snackBar
      ._openedSnackBarRef!.onAction()
      .pipe(tap((_) => this.router.navigate(['/auth'])))
      .subscribe();
  }

  invalidDataError(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 5000,
    });

    return this.snackBar._openedSnackBarRef!.onAction().subscribe();
  }

  rentedSuccessfully() {
    this.snackBar.open('Der Vorgang war Erfolgreich', 'OK', {
      duration: 5000,
    });

    return this.snackBar._openedSnackBarRef!.onAction().subscribe();
  }
}
