import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../dashboard/home/home.component';
import { ToevoegenComponent } from '../dashboard/toevoegen/toevoegen.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'toevoegen', component: ToevoegenComponent},
  {path: '**', redirectTo: ''}
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
