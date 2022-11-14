import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  jobs$ = new Observable<Job[]>();
  pow = Math.pow;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.jobs$ = this.apiService.getJobs();
  }
}
