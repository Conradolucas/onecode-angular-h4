import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../shared/routes.animations';
import { AccessService } from './access.service';

@Component({
  selector: 'one-code-h4-access',
  templateUrl: './access.component.html',
  styleUrls: ['../security.component.scss'],
  animations: [routerTransition()]
})

export class AccessComponent implements OnInit {

  constructor(public accessService: AccessService) { }

  ngOnInit(){
    this.setUser();
  }

  setUser() {
    localStorage.setItem('user', 'demo');
    localStorage.setItem('pass', 'demo123');
  }

  validaForm(user, pass) {
    console.log(user, pass);
  }

  login(){
    this.accessService.checkLogin();
  }

}
