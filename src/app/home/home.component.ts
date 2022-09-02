import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Home Component");
    

    let typed = new Typed(".auto-input",
    {
      strings:["is india’s one of the best","Web and mobile app development company..."],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true

    })
  }

}
