import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { tap, map } from 'rxjs/operators';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data$ = new Observable<Data>();
  offen = false;
  constructor(private meta: Meta, private apiService: ApiService) {}

  ngOnInit(): void {
    this.meta.addTags([
      {
        name: 'author',
        content: 'Riem-Apotheke',
      },
      {
        name: 'keywords',
        content: 'Riem Apotheke,Riem-Apotheke,riem-apotheke,riem apotheke',
      },
    ]);
    window.scrollTo(0, 0);
    this.data$ = this.apiService.getData().pipe(
      tap((data) => {
        let date = new Date(Date.now());
        let day = date.getDay() - 1;
        let tag =
          day != 7 && day >= 0
            ? data.werktag[day]
            : {
                offen: false,
                oeffnungszeiten: {
                  schichten: [],
                },
              };
        if (tag.offen) {
          this.offen = tag.oeffnungszeiten.schichten.some((vonBis) => {
            let nun = date.getHours() + date.getMinutes() / 60;
            let von = vonBis.von.st + vonBis.von.min / 60;
            let bis = vonBis.bis.st + vonBis.bis.min / 60;
            return von <= nun && bis >= nun;
          });
          return;
        }
        this.offen = false;
        return;
      }),
      map((d) => {
        this.meta.addTag({
          name: 'description',
          content: `${d.greeting}\n${d.beschreibung}`,
        });
        return d;
      }),
      shareReplay(1)
    );
  }
}
