import { Component, HostBinding, OnInit } from '@angular/core';
import { routerAnimation } from '../../utils/page.animation';
import { OmdbService } from '../../services/omdb.service';
import { HistoryService } from '../../services/history.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Film } from '../../models/film';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [routerAnimation]
})

export class DashboardComponent implements OnInit {

  film: Film | null = null;
  history: Film[] = []

  value: string = ''
  errorMessage: string = ''
  valueChanged: Subject<string> = new Subject<string>();
  loading = false

  constructor(
    private omdbService: OmdbService,
    private historyService: HistoryService,
  ) {}

  ngOnInit() {
    this.history = this.historyService.getAll()
    this.valueChanged.pipe(
      debounceTime(1000))
      .subscribe(() => {
        this.loading = true;

        this.omdbService.find(this.value).subscribe(film => {
          if(film.Response == 'True') {
            const filmObject = { ...film, Date: new Date(Date.now()) }
            this.historyService.add(filmObject)
            this.history = this.historyService.getAll()
            this.film = filmObject
            this.errorMessage = ''
          } else {
            this.film = null
            this.errorMessage = 'Não foi possível encontrar o filme'
          }

          this.loading = false;
        })
      });
  }

  changed() {
    this.film = null
    this.valueChanged.next(this.value);
  }
}