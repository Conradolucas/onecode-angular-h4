import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from "../../../security/access/access.service";

@Component({
  selector: 'one-code-h4-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private accessService: AccessService){}

  ngOnInit() {
  }

  logout(){
    this.accessService.logout();
    this.router.navigate(['/login']);
  }

}
