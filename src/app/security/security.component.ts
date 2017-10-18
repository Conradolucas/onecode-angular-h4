import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../shared/routes.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'one-code-h4-login',
  templateUrl: './security.component.html',
  animations: [routerTransition()]
})

export class SecurityComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    if (this.router.url === '/login') {
      this.router.navigate(['/login/acessar']);
    }
  }

}
