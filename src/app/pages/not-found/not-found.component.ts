import { Component, OnInit, HostBinding } from '@angular/core';
import { routerAnimation } from '../../utils/page.animation';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: [routerAnimation]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
