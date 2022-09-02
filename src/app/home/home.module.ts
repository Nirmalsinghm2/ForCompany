import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatModule } from '../appModule/mat.module';
import {  RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatModule,
    RouterModule,
    HomeRoutingModule,
    // routingComponents
    
    
  ]
})
export class HomeModule {

  constructor() {

    console.log('home module');

  }
}
