import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forRoot(routes),
    MatTableModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    CommonModule,
    SweetAlert2Module,

  ],
  exports: [
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatButtonToggleModule
  ]
})
export class AppRoutingModule { }
