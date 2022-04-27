import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardCardComponent } from './pages/dashboard/components/dashboard-card/dashboard-card.component';

import { OmdbService } from './services/omdb.service';
import { HistoryService } from './services/history.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardCardComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
  ],
  providers: [OmdbService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
