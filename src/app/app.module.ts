import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { MatModule } from './appModule/mat.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { IncludesModule } from './includes/includes.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxTypedJsModule,
    MatModule,
    FontAwesomeModule,
    LoadingBarRouterModule,
    IncludesModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    console.log( "App module laoded");
    
  }
}
