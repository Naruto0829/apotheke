import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-job-dialog',
  templateUrl: './job-dialog.component.html',
  styleUrls: ['./job-dialog.component.css'],
})
export class JobDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Job) {}
  job?: Job;
  ngOnInit(): void {
    this.job = this.data;
  }
}
