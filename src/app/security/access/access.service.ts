import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AccessService {

  constructor(public router: Router) { }

  checkLogin() {
    localStorage.setItem('access_token', 'true');
    this.router.navigate(['/dashboard']);
  }

  logout(){
    localStorage.removeItem('access_token');
  }

}
