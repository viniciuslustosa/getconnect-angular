import { Component, OnInit, Input } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { Film } from '../../../../models/film';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css'],
})

export class DashboardCardComponent implements OnInit {

  @Input() film: Film | undefined = undefined;
  @Input() removable: boolean = false;

  constructor(
    private historyService: HistoryService,
  ) {}

  ngOnInit() {}

  remove() {
    if(!this.film) return
    this.historyService.remove(this.film)
    this.film = undefined
  }
}