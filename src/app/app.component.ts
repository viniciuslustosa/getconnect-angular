import { Component } from '@angular/core';
import { Film } from './models/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'getconnect-angular';
  films: Film[] = []
  loading = false

  constructor(
  ) {}

  ngOnInit() {
  }
}
