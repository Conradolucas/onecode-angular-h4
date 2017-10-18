import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../shared/routes.animations';

@Component({
  selector: 'one-code-h4-test',
  templateUrl: './test.component.html',
  animations: [routerTransition()]
})

export class TestComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
