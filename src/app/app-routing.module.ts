import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '**', redirectTo: '/404' },
  { path: '404', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
