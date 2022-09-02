import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { MatModule } from '../appModule/mat.module';


const routes: Routes = [
  {path:'', component:ServicesComponent}
];


@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
   MatModule,
    RouterModule.forChild(routes)
  ]
})

export class ServicesModule { 

  constructor(){

    console.log( 'services module');
    
  }
}
