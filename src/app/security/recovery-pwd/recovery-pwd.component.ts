import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../shared/routes.animations';

@Component({
  selector: 'one-code-h4-recovey-pwd',
  templateUrl: './recovery-pwd.component.html',
  animations: [routerTransition()]
})

export class RecoveryPwdComponent implements OnInit {

  constructor() { }

  ngOnInit(){}


}
