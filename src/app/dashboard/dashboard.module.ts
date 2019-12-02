import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ToevoegenComponent } from './toevoegen/toevoegen.component';
import { ArtiestToevoegenComponent } from './toevoegen/artiest/artiest.component';
import { GenreToevoegenComponent } from './toevoegen/genre/genre.component';
import { SchilderijToevoegenComponent } from './toevoegen/schilderij/schilderij.component';
import { GenresComponent } from './genres/genres.component';
import { ArtiestenComponent } from './artiesten/artiesten.component';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [HomeComponent, ToevoegenComponent, ArtiestToevoegenComponent, GenreToevoegenComponent, SchilderijToevoegenComponent, GenresComponent, ArtiestenComponent, DetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DashboardModule
  ]
})
export class DashboardModule { }
