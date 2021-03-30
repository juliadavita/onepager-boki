import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toTeam(){
    document.getElementById("team").scrollIntoView({behavior:"smooth"});
  }

  toProduct(){
    document.getElementById("loki").scrollIntoView({behavior:"smooth"});
  }

}
