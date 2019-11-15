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


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ToevoegenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    SharedModule
  ],
  providers: [
    ArtiestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
