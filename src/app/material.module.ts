import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {};

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }
