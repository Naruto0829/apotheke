import { Component, Input, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  pages = new Observable<Item[]>();
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.pages = this.apiService.getMenus();
  }
}
