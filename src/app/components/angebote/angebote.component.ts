import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-angebote',
  templateUrl: './angebote.component.html',
  styleUrls: ['./angebote.component.css'],
})

export class AngeboteComponent implements OnInit {

    angebote$ = new Observable<Angebot[]>();
    stop = false
    data: Angebot[] =[]
    original: Angebot[] =[];

    constructor(private apiService: ApiService, private httpClient: HttpClient) {}

    public length  : number  = 0;
    public pageSize : number = 20;
    public pageSizeOptions: any = [20, 50, 100];

    ngOnInit(): void {
        window.scrollTo(0, 0);
        this.angebote$ = this.apiService.getAngebote();
        setTimeout(() => {
            this.stop = true
        }, 1000);
    }

    pageHandle(event: any){

      const start: number = event.pageIndex * event.pageSize;
      const end: number   = (event.pageIndex + 1) * event.pageSize;

      this.data = this.original.slice(start, end);
    }

    show(e: Hits) {
        this.original = (<Angebot[]>(<unknown>e)).reverse();
        this.data   = this.original.slice(0, this.pageSize);
        this.length = (<Angebot[]>(<unknown>e)).length;
    }
}
