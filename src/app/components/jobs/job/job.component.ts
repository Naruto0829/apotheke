import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobDialogComponent } from '../../dialogs/job-dialog/job-dialog.component';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  @Input() job: Job = {
    title: '',
    description: '',
    short_desc: '',
    bild: {
      url: '',
    },
  };
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openJobDialog() {
    const dialogRef = this.dialog.open(JobDialogComponent, {
      width:'80vw',
      data: this.job,
    });
  }
}
