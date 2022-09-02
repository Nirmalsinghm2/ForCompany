import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GargiSolution';
  loader = true; 
  
  ngOnInit(): void {
   setTimeout(()=>{                           
     this.loader = false;
 }, 2000);
 }
}
