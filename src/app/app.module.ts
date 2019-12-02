import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './dashboard/home/home.component';
import { ToevoegenComponent } from './dashboard/toevoegen/toevoegen.component';
import { ArtiestService } from './artiest/artiest.service';
import { GenreService } from './genre/genre.service';
import { ArtiestToevoegenComponent } from './dashboard/toevoegen/artiest/artiest.component';
import { GenreToevoegenComponent } from './dashboard/toevoegen/genre/genre.component';
import { SchilderijService } from './schilderij/schilderij.service';
import { SchilderijToevoegenComponent } from './dashboard/toevoegen/schilderij/schilderij.component';
import { ArtiestenComponent } from './dashboard/artiesten/artiesten.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ToevoegenComponent,
    ArtiestToevoegenComponent,
    GenreToevoegenComponent,
    SchilderijToevoegenComponent,
    ArtiestenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    SharedModule
  ],
  providers: [
    ArtiestService,
    GenreService,
    SchilderijService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
