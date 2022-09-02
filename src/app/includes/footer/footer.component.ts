import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  loader: true | undefined;
  constructor() { }

  ngOnInit(): void {
  setTimeout(() => {
    this.loader 
  }, 2000);
  
  }

}
