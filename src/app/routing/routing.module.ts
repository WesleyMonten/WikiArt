import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../dashboard/home/home.component';
import { ToevoegenComponent } from '../dashboard/toevoegen/toevoegen.component';
import { ArtiestToevoegenComponent } from '../dashboard/toevoegen/artiest/artiest.component';
import { GenreToevoegenComponent } from '../dashboard/toevoegen/genre/genre.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'toevoegen', component: ToevoegenComponent },
  { path: 'artiest-toevoegen', component: ArtiestToevoegenComponent },
  { path: 'genre-toevoegen', component: GenreToevoegenComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
