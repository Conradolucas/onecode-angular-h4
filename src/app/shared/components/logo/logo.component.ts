import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bottomTransiton } from '../../routes.animations';

@Component({
  selector: 'one-code-h4-logo',
  templateUrl: './logo.component.html',
  animations: [bottomTransiton()]
})

export class LogoComponent implements OnInit{

  constructor() {}

  ngOnInit(){
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('login');
  }

  ngOnDestroy(){
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove('login');
  }

}
