import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../dashboard/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
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
