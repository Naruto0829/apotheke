import { OfferComponent } from './components/offer/offer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AnfahrtComponent } from './components/anfahrt/anfahrt.component';
import { AngeboteComponent } from './components/angebote/angebote.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { LeistungenComponent } from './components/leistungen/leistungen.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'offer', component: OfferComponent },
  { path: 'anfahrt', component: AnfahrtComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'angebote', component: AngeboteComponent },
  { path: 'dienstleistungen', component: LeistungenComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
