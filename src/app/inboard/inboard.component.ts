import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'one-code-h4-inboard',
  templateUrl: './inboard.component.html'
})
export class InboardComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/dashboard']);
    }
  }

}
