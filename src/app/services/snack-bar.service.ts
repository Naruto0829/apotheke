import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private _snackbar: MatSnackBar) {}
  openSnackBar(mssg: string, action: string) {
    this._snackbar.open(mssg, action, {
      duration: 3 * 1000,
    });
  }
}
