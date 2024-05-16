import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router) {
  }
  changeRoute(event:MouseEvent, name: string){
    event.preventDefault();
    this.router.navigate([name]);

  }
}
