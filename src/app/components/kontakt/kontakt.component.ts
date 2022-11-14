import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Kontakt } from 'src/app/interfaces/kontakt';
import { EmailService } from 'src/app/services/email.service';
import { AfterNachrichtDialogComponent } from '../dialogs/after-nachricht-dialog/after-nachricht-dialog.component';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css'],
})
export class KontaktComponent implements OnInit {
  stop = false;
  constructor(
    private _emailService: EmailService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      this.stop = true;
    }, 1000);
  }
  onSubmit(kontakt: Kontakt) {
    this._emailService
      .SendMessage(JSON.stringify({ data: kontakt }))
      .subscribe();
    const ref = this._dialog.open(AfterNachrichtDialogComponent, {
      width: '80vw',
    });
    ref.afterOpened().subscribe((_)=>window.scrollTo(0, 0))
    ref.afterClosed().subscribe((_) => window.scrollTo(0, 0));
  }
}
