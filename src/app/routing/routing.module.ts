import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // { path: '', component: DashboardComponent, pathMatch: 'full'},
  // { path: 'login', component: LoginComponent},
  //   {path: '**', redirectTo: ''}
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
