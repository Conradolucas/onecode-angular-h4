import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../shared/routes.animations';

@Component({
  selector: 'one-code-h4-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [routerTransition()]
})

export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
