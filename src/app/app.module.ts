import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule,Meta } from '@angular/platform-browser';
import { cartReducer } from './reducers/cart';
import { productReducer } from './reducers/product';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NestedListPipe } from './pipes/nested-list.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { FaqComponent } from './components/faq/faq.component';
import { OfferComponent } from './components/offer/offer.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { NewsArticleComponent } from './components/news-article/news-article.component';
import { LeistungenComponent } from './components/leistungen/leistungen.component';
import { AnfahrtComponent } from './components/anfahrt/anfahrt.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { AngeboteComponent } from './components/angebote/angebote.component';
import { AngebotComponent } from './components/angebot/angebot.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { FormatWorkHoursPipe } from './pipes/format-work-hours.pipe';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { StatusComponent } from './components/status/status.component';
import { FeatureBoxComponent } from './components/feature-box/feature-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorStateMatcher, MatOptionModule } from '@angular/material/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobComponent } from './components/jobs/job/job.component';
import { EinkaufswagenComponent } from './components/einkaufswagen/einkaufswagen.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EmailService } from './services/email.service';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';
import { ToLocalDEPipe } from './pipes/to-local-de.pipe';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { KontaktFormComponent } from './components/kontakt/kontakt-form/kontakt-form.component';
import { RoundToPipe } from './pipes/round-to.pipe';
import { JobDialogComponent } from './components/dialogs/job-dialog/job-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { KontaktDialogComponent } from './components/dialogs/kontakt-dialog/kontakt-dialog.component';
import { MatSelectModule} from '@angular/material/select';
import { ProductComponent } from './components/einkaufswagen/product/product.component';
import { AfterNachrichtDialogComponent } from './components/dialogs/after-nachricht-dialog/after-nachricht-dialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NestedListPipe,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    NewsComponent,
    FaqComponent,
    NewsletterComponent,
    OfferComponent,
    NewsArticleComponent,
    LeistungenComponent,
    AnfahrtComponent,
    KontaktComponent,
    AngeboteComponent,
    AngebotComponent,
    ErrorComponent,
    HomeComponent,
    FormatWorkHoursPipe,
    SearchbarComponent,
    StatusComponent,
    FeatureBoxComponent,
    JobsComponent,
    JobComponent,
    EinkaufswagenComponent,
    HighlightComponent,
    HighlightsComponent,
    LoaderComponent,
    ToLocalDEPipe,
    ImpressumComponent,
    DatenschutzComponent,
    KontaktFormComponent,
    RoundToPipe,
    JobDialogComponent,
    KontaktDialogComponent,
    ProductComponent,
    AfterNachrichtDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ cart: cartReducer, selectedProduct: productReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    EmailService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    Meta
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
